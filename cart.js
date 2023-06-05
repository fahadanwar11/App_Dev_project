import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import {  getCartItemsByUserId } from './Database';
import { useRoute } from '@react-navigation/native';

const CartPage = ({ navigation }) => {
  //const [userID, setUserID] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const route = useRoute();
  const userID = route.params?.userId;
  console.log('the users id on the cartpage is this   ---->', userID);
  
  const backArrow = () => { navigation.navigate('Main');};

  const handleEditProfile = () => { };

  const handleChangePassword = () => { };

  const handlePersonalSettings = () => { };

  const HandleLogoutButton = () => {
    navigation.navigate('Login');
  };

  const handleShowCartItems = async () => {
    try {
      // Fetch cart items for the given userID using the getCartItemsByUserId function
      const items = await  getCartItemsByUserId(userID);
      console.log('items returned in the cart page are ----:', items);
      setCartItems(items);
      console.log(Array.isArray(cartItems));
      console.log('Cart items fetched successfully:', items);
      console.log('Cart Items:', cartItems)
      
    } catch (error) {
      console.log('Error fetching cart items:', error);
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
        <Text style={styles.headertext}>Cart</Text>
        <Image source={require('./assets/user.png')} style={styles.overlayImage} />
      </View>

      <View style={styles.body1}>
  
  <TouchableOpacity onPress={handleShowCartItems} style={styles.settingbuttons}>
  </TouchableOpacity>

  {/* Display cart item information */}
  {cartItems.map((item, index) => (
    <View key={index} style={styles.cartItem}>
      <Text style={styles.cartItemText}>Product ID: {item.product_id}</Text>
      <Text style={styles.cartItemText}>Size: {item.size}</Text>
      <Text style={styles.cartItemText}>Quantity: {item.quantity}</Text>
    </View>
  ))}
</View>





      {/* Rest of the content */}

      <View style={styles.body2}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>Proceed To Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>

      {/* ------------------------------------------------ ---------------*/}
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
  header: {
    width: '100%',
    height: '25%',
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
  headertext: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  body1: {
    width: '100%',
    height: '75%',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 0.1,
    backgroundColor: 'white',
  },
  settingbuttons: {
    top:-140 ,
    height: 60,
    backgroundColor: '#282E4A',
    borderRadius: 30,
    
  },
  cartItem: {
    marginHorizontal: 10,
    backgroundColor:'pink',


  },
  cartItemText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
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
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.1,
    backgroundColor: 'green',
  },
  settingbuttontext: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: '100',
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  settingbuttontext2: {
    fontSize: 18,
    
    fontFamily: 'Helvetica',
    fontWeight: '100',
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  settingbuttons2: {
    width: 200,
    height: 35,
    backgroundColor: '#282E4A',
    borderRadius: 17,
    margin: 10,
  },
  overlayImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    opacity: 1,
    position: 'absolute',
    right: 0,
    top: 20,
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
  },
  footerItem: {
    alignItems: 'center',
    padding: 3,
  },
  footericons: {
    width: 28,
    height: 28,
    justifyContent: 'center',
  },
  FooterIconText: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
});

export default CartPage;
