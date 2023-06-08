import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import db from './Database';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';
import Modal from 'react-native-modal';
import { addToCart } from './Database'; 

import { useRoute } from '@react-navigation/native';

const DescriptionPageScreen = ({ navigation, route }) => {
  const { product, userId } = route.params;
  const [quantity, setQuantity] = useState('1');
  const [productData, setProductData] = useState(product);
  const [selectedSize, setSelectedSize] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const backArrow = () => {
    navigation.navigate('Main', { userId });
  };
  useEffect(() => {
    fetchAdditionalData();
  }, []);

  const fetchAdditionalData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM products WHERE product_id = ?',
        [product.product_id],
        (_, result) => {
          const rows = result.rows;
          if (rows.length > 0) {
            const additionalData = rows.item(0);
            setProductData((prevProduct) => ({ ...prevProduct, ...additionalData }));
          }
        },
        (_, error) => {
          console.log('Error fetching additional product data:', error);
        }
      );
    });
  };

  const checkSizeAvailability = (size) => {
    return productData[size] > 0;
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleAddToFavourites = async (productId) => {
    console.log('userId on the favourites page is:', userId);
    try {
      await addToFavorites(productId, userId);
      console.log('Product added to favorites successfully.', productId);
    } catch (error) {
      console.log('Error adding product to favorites:', error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!checkSizeAvailability(selectedSize)) {
        setIsModalVisible(true);
        return;
      }
  
      console.log('product id passed in addtocart', productData.product_id);
      const cartItemId = await addToCart(productData.product_id, userId, selectedSize, quantity);
      console.log('Cart Item ID:', cartItemId);
  
      // Reset input values after successful addition
      setQuantity('1');
  
      // Show success message or perform additional actions
    } catch (error) {
      console.log('Error:', error);
      // Show error message or perform error handling
    }
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={backArrow} style={styles.backbutton}>
          <Image source={require('./assets/left-arrow.png')} style={styles.leftarrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageview}>
        <Image source={{ uri: product.image_path }} style={styles.productImage} />
      </View>
      <ScrollView style={{ marginBottom: '15.5%' }}>
        <View style={styles.product_info}>
          <Text style={styles.nametext}>{productData.name}</Text>
          <Text style={styles.pricetext}>Price: RS.{productData.price}</Text>
          <Text style={{ fontFamily: 'montserrat', fontSize: 20, fontWeight: '500', paddingTop: 5 }}>Sizes Available:</Text>
          <View style={styles.sizechart}>
            <TouchableOpacity
              onPress={() => setSelectedSize('XS')}
              style={[styles.sizebutton, { opacity: checkSizeAvailability('XS') ? 1 : 0.5 }]}
            >
              <Text style={styles.sizebuttontext}>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize('S')}
              style={[styles.sizebutton, { opacity: checkSizeAvailability('S') ? 1 : 0.5 }]}
            >
              <Text style={styles.sizebuttontext}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize('M')}
              style={[styles.sizebutton, { opacity: checkSizeAvailability('M') ? 1 : 0.5 }]}
            >
              <Text style={styles.sizebuttontext}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize('L')}
              style={[styles.sizebutton, { opacity: checkSizeAvailability('L') ? 1 : 0.5 }]}
            >
              <Text style={styles.sizebuttontext}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedSize('XL')}
              style={[styles.sizebutton, { opacity: checkSizeAvailability('XL') ? 1 : 0.5 }]}
            >
              <Text style={styles.sizebuttontext}>XL</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>DESCRIPTION:</Text>
          <Text>{productData.description}</Text>
          <View>
            <TouchableOpacity style={styles.addtocart} onPress={handleAddToCart}>
              <Text style={styles.addtocarttext}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.favorites} onPress={handleAddToFavourites}>
              <Text style={styles.addtofavoritestext}>ADD TO FAVORITES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
        
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{color:'darkgray'}}>No {selectedSize} available.</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        marginTop:'5%',
        marginLeft:'5%',
    },
    backbutton: {
        justifyContsent:'center',
        alignSelf:'flex-start',
      },
    leftarrow: {
        width: 32,
        height: 32,
    },
    imageview:{
        width:'100%',
        marginTop:'5%',
    },
    productImage: {
        width: '100%',
        height: 350,
    },
    product_info: {
        marginTop:'5%',
        display:'flex',
        width:'90%',
        justifyContent:'center',
        marginLeft:'5%',
    },
    nametext:{
        fontFamily:'montserrat',
        fontSize:26,
        fontWeight: 'bold',
        paddingTop:10,
    },
    pricetext:{
        paddingTop:5,
        fontFamily:'montserrat',
        fontSize: 20,
        fontWeight:'500',
    },
    description:{
        paddingTop:7,
        fontFamily:'montserrat',
        fontSize: 16,
        fontWeight:'bold',
        paddingBottom:4,

    },
    sizechart:{
        display:'flex',
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        color:'white',
        marginTop:4,
    },
    sizebutton:{
        width:49,
        height:25,
        borderRadius:25,
        backgroundColor:'#282E4A',
        fontSize: 14,
        justifyContent:'center',   
        alignSelf:'center',     
    },
    sizebuttontext:{
      textAlign:'center',
      fontFamily:'montserrat',
      fontSize: 14,
      color:'white',
    },
    addtocart:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        backgroundColor:'#282E4A',
        marginTop:10,
        padding:10,
        
    },
    addtocarttext:{
      fontSize:14,
      color:'white',
      fontFamily:'montserrat',
    },
    favorites:{
        display:'flex',
        width:300,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#282E4A',
        marginTop:30,
        padding:10,
        borderRadius:38.2,
    },
    addtofavoritestext:{
      fontSize:18,
      color:'white',
      fontFamily:'montserrat',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: '7.5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'black',
        backgroundColor: 'white',
    },
    footerItem: {
        alignItems: 'center',
        padding: 3,
    },
    footericons: {
        width: 24,
        height: 24,
        justifyContent: 'center',
    },
    FooterIconText: {
        fontFamily: 'montserrat',
        fontWeight: '100',
        fontSize: 12,
    },
});


export default DescriptionPageScreen;