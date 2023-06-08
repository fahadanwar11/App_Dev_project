import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { getCartItemsByUserId } from './Database';
import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-web';
import db from './Database';
import { useRoute } from '@react-navigation/native';

const OrderPage = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [favouritesItems, setFavouritesItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const route = useRoute();
  const userID = route.params?.userId;
  const [isChecked, setIsChecked] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showOrderReceivedModal, setShowOrderReceivedModal] = useState(false);

  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };

  const backArrow = () => {
    navigation.navigate('Cart', { userId: userID });
  };

  const handleAddress = (text) => {
    setAddress(text);
  };

  const handleShowCartItems = async () => {
    try {
      const items = await getCartItemsByUserId(userID);
      setFavouritesItems(items);
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    handleShowCartItems();
  }, []);

  const fetchProductById = (item) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT products.product_id, products.name, products.price, images.image_path
        FROM products
        JOIN images ON products.product_id = images.product_id
        WHERE products.product_id = ?;`,
        [item],
        (_, result) => {
          const rows = result.rows;
          const productList = [];
          let tempTotalPrice = 0;
          for (let i = 0; i < rows.length; i++) {
            const product = rows.item(i);
            productList.push(product);
            const price = parseFloat(product.price);
            tempTotalPrice += price;
          }
          setProducts((prevProducts) => [...prevProducts, ...productList]);
          setTotalPrice(tempTotalPrice);
        },
        (_, error) => {
          console.log('Error fetching product:', error);
        }
      );
    });
  };

  useEffect(() => {
    const tempList = [];
    const tempList2 = [];

    favouritesItems.forEach((item) => {
      if (tempList.includes(item.product_id) && tempList2.includes(item.size)) {
        return;
      }
      fetchProductById(item.product_id);
      tempList.push(item.product_id);
      tempList2.push(item.size);
    });
  }, [favouritesItems]);

  const PlaceOrder = () => {
    if (!isChecked) {
      // Display modal to select a payment method
      setShowPaymentModal(true);
      return;
    }

    // Place order logic here
    // ...

    // Display modal indicating order received
    setShowOrderReceivedModal(true);
  };

  const handleModalClose = () => {
    setShowPaymentModal(false);
    setShowOrderReceivedModal(false);
    if (isChecked) {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={backArrow}>
            <Image source={require('./assets/left-arrow-white.png')} style={styles.leftarrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headertext}>ORDER</Text>
        <Image source={require('./assets/user.png')} style={styles.overlayImage} />
      </View>

      <ScrollView>
        <View style={styles.productlist}>
          {products.map((product, index) => (
            <View key={index} style={styles.productbox}>
              <TouchableOpacity>
                <Image source={{ uri: product.image_path }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productName}>
                  {<Text style={styles.productName}>size: {favouritesItems[index].size}</Text>}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.simple}>
          <Text style={styles.simpletext}>{<Text style={styles.productName}>Price: {totalPrice}RS</Text>}</Text>
          <Text style={styles.simpletext2}>Taxes and shipping calculated at checkout.</Text>
        </View>
        <View style={styles.payment}>
          <TextInput
            style={styles.i}
            placeholder="Address"
            value={address}
            onChangeText={handleAddress}
          />
        </View>
        <View style={styles.paymentmethod}>
          <CheckBox
            title="Click for cash on Cash On Delivery"
            checked={isChecked}
            onPress={handleCheckBoxToggle}
          />
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity onPress={PlaceOrder} style={styles.settingbuttons2}>
            <Text style={styles.settingbuttontext2}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={showPaymentModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Please select a payment method.</Text>
            <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={showOrderReceivedModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Order received!</Text>
            <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  backbutton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  payment:{
    display:'flex',
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
    
  },
  i:{
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    marginBottom: 25,
    borderRadius: 5,
  },
  paymentmethod:{
    display:'flex',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'black',
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#282E4A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftarrow: {
    width: 32,
    height: 32,
    
  },
  simple: {
    width: '40%',
    height: 100,
    backgroundColor:'white',
    textAlign:'center',
    alignSelf:'center',
    
  },
  headertext: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  simpletext: {
    fontFamily: 'montserrat',
    fontSize: 22,
    color: 'black',
    textAlign:'center',
  },
  simpletext2: {
    fontFamily: 'montserrat',
    fontSize: 12,
    color: 'black',
    textAlign:'center',
  },
  productImage: {
    width: 250,
    height: 180,
    marginRight: 1,
  },
  productbox: {
  height:250,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: 10,
  paddingHorizontal: 10,
  backgroundColor:'white',
  },


  productName: {
    fontSize: 22,
    fontWeight: '500',
    margin:1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'montserrat',
    
  },
  productPrice: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
  },




  productlist: {
    flex: 1,
    marginTop:-200,
    display:'flex',
    flexDirection:'row',
    width:'100%',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
    backgroundColor:'white',
    marginBottom:5,
    marginTop:50,
  },
 
  cartItem: {
    marginHorizontal: 10,
    backgroundColor:'white',


  },
  cartItemText: {
    fontSize: 16,
    fontFamily: 'montserrat',
    fontWeight: '100',
    color: 'black',
  },
  input: {
    top:50,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  body2: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom:50,
    backgroundColor: 'rgba(40, 46, 74, 0)', // Set alpha value to 0 for transparency
  
  },
 
  settingbuttontext2: {
    fontSize: 18,
    fontFamily: 'montserrat',
    fontWeight: '100',
    color: 'white',
    padding: 8,
    textAlign: 'center',

  },
  settingbuttons2: {
    width: 250,
    height: 35,
    backgroundColor: '#282E4A',
    borderRadius: 10,
    margin: 10,
  },
  addtocartbtn: {
    width: 150,
    height: 35,
    backgroundColor: '#282E4A',
    borderRadius: 1,
    marginLeft: 'auto', // Add this line to push the button to the right
    marginRight: -200,
    margintop: 200,

    alignSelf: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxHeight: '7.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'black',
    position:'absolute',
    backgroundColor:'white',
    bottom:1, 
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
    color:'#697C86',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
    backgroundColor: '#282E4A',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  
});

export default OrderPage;
/**/