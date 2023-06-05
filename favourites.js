import React, { useState , useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import {  getFavoriteProductIdsByUserId } from './Database_1';
import { ScrollView } from 'react-native-web';
import db from './Database';
//import {  fetchProductById } from './Database_1';

import { useRoute } from '@react-navigation/native';

const FavouritesPage = ({ navigation }) => {
  //const [userID, setUserID] = useState('');
  const [favouritesItems, setFavouritesItems] = useState([]);
  const [products, setProducts] = useState([]);
  const route = useRoute();
  const userID = route.params?.userId;
  console.log('the users id on the Favouritespage is this   ---->', userID);
  
  const backArrow = () => {
    navigation.navigate('Main', { userId: userID });
  };

  const handleAddToCart = () => { };

  const handleChangePassword = () => { };

  const handlePersonalSettings = () => { };

  const HandleLogoutButton = () => {
    navigation.navigate('Login');
  };

  

  const getDistinctIntegers = (items) => {
    const distinctIntegers = [...new Set(items.filter(item => typeof item === 'number' && Number.isInteger(item)))];
    return distinctIntegers;
  };
  
  const handleShowFavouritesItems = async () => {
    try {
      // Fetch cart items for the given userID using the getCartItemsByUserId function
      const items = await  getFavoriteProductIdsByUserId(userID);
      console.log('items returned as fav products are -->:', items);
      setFavouritesItems(items);
      console.log(Array.isArray(favouritesItems));
     
      
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    handleShowFavouritesItems();
  }, []);

  useEffect(() => {
    console.log('Updated favouritesItems:', favouritesItems);
  }, [favouritesItems]);

  

 
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
          for (let i = 0; i < rows.length; i++) {
            const product = rows.item(i);
            productList.push(product);
          }
          setProducts((prevProducts) => [...prevProducts, ...productList]);
          console.log('products list of fav is -->:', productList);
        },
        (_, error) => {
          console.log('Error fetching product:', error);
        }
      );
    });
  };


  useEffect(() => {
    console.log('Updated favouritesItems:', favouritesItems);
    const tempList = [];
    // Fetch products for each favorite item
    favouritesItems.forEach((item) => {
      console.log(item);
      if (tempList.includes(item)) {
        // If item value is already in the temporary list, skip this iteration
        return;
      }
      fetchProductById(item);
      tempList.push(item); 
    });
  }, [favouritesItems]);


 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={backArrow}>
            <Image source={require('./assets/left-arrow-white.png')} style={styles.leftarrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headertext}>Favourites</Text>
        <Image source={require('./assets/user.png')} style={styles.overlayImage} />
      </View>

      
  

        <ScrollView>
            <View style={styles.productlist}>
              {products.map((product, index) => (
                <View key={index} style={styles.productbox}>
                 <TouchableOpacity>
                  <Image source={{ uri: product.image_path}} style={styles.productImage} />
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productName}>Price: {product.price}RS</Text>
                  <TouchableOpacity onPress={handleAddToCart} style={styles.addtocartbtn}>
                  <Text style={styles.settingbuttontext2 }>Add to Cart</Text>
                  </TouchableOpacity>
                  {/*console.log('before function call :',product.product_id)*/}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            </ScrollView>









      {/* Rest of the content */}

      <View style={styles.body2}>
       
        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>View Cart</Text>
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

  productImage: {
    width: 250,
    height: 180,
    marginRight: 1,
  },



  productbox: {
    width: '100%',
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
    //textAlign: 'left',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    
  },
  productPrice: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
  },




  productlist: {
    flex: 1,
      display:'flex',
      flexDirection:'row',
      width:'100%',
      flexWrap:'wrap',
      justifyContent:'space-evenly',
      backgroundColor:'white',
      marginBottom:50,
      marginTop:50,
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
    
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.1,
    bottom:50,
    backgroundColor: 'rgba(40, 46, 74, 0)', // Set alpha value to 0 for transparency
  
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
    width: 150,
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
    position:'absolute',
    backgroundColor:'white',
    bottom:1,
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

export default FavouritesPage;
