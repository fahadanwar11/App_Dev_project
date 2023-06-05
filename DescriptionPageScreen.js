import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import db from './Database';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';



const DescriptionPageScreen = ({ route }) => {
  const { product } = route.params;
  const [productData, setProductData] = useState(product);

  const backArrow = () => {
    navigation.navigate('Main');
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

  return (
    <View style = {styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={backArrow} style={styles.backbutton}>
                <Image source={require('./assets/left-arrow.png')} style={styles.leftarrow} />
            </TouchableOpacity> 
        </View>

        <View style={styles.imageview}>
            <Image source={{uri: product.image_path}} style={styles.productImage}/>
        </View>
        <ScrollView style={{ marginBottom: '15.5%' }}>
            <View style={styles.product_info}>
                <Text style={styles.nametext}>{productData.name}</Text>
                <Text style={styles.pricetext}>Price: RS.{productData.price}</Text>
                <Text style = {{fontFamily:'Helvetica',fontSize:20,fontWeight:'500',paddingTop:5,}}>Sizes Available:</Text>
                <View style={styles.sizechart}>
                    <TouchableOpacity style={styles.sizebutton}>XS</TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>S</TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>M</TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>L</TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>XL</TouchableOpacity>
                </View>
                <Text style={styles.description}>DESCRIPTION:</Text>
                <Text>{productData.description}</Text>
                <View>
                    <TouchableOpacity style={styles.addtocart}>ADD TO CART</TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.favorites}>ADD TO FAVORITES</TouchableOpacity>
                </View>
            </View>
        </ScrollView>    
    
        <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/home-page.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/shopping-cart.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/heart.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>FAVORITES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/user.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/settings.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>

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
        fontFamily:'Helvetica',
        fontSize:26,
        fontWeight: 'bold',
        paddingTop:10,
    },
    pricetext:{
        paddingTop:5,
        fontFamily:'Helvetica',
        fontSize: 20,
        fontWeight:'500',
    },
    description:{
        paddingTop:7,
        fontFamily:'Helvetica',
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
        textAlign:'center',
        fontFamily:'Helvetica',
        fontSize: 14,
        justifyContent:'center',   
        alignSelf:'center',     
    },
    addtocart:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        backgroundColor:'#282E4A',
        color:'white',
        fontFamily:'Helvetica',
        marginTop:10,
        padding:10,
        fontSize:14,
    },
    favorites:{
        display:'flex',
        width:300,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#282E4A',
        color:'white',
        fontFamily:'Helvetica',
        marginTop:30,
        padding:10,
        fontSize:18,
        borderRadius:38.2,
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
        fontFamily: 'Helvetica',
        fontWeight: '100',
        fontSize: 12,
    },
});


export default DescriptionPageScreen;
