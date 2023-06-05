import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import db from './Database';
import { ScrollView } from 'react-native-web';
import { useRoute } from '@react-navigation/native';
import { addToFavorites } from './Database';

const MainScreenPage = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const route = useRoute();
  const userId = route.params?.userId;
  console.log('the users id on the mainpage is this   ---->', userId);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT products.product_id, products.name, products.price, images.image_path
        FROM products
        JOIN images ON products.product_id = images.product_id;`,
        [],
        (_, result) => {
          const rows = result.rows;
          const productList = [];
          for (let i = 0; i < rows.length; i++) {
            const product = rows.item(i);
            productList.push(product);
          }
          setProducts(productList);
        },
        (_, error) => {
          console.log('Error fetching products:', error);
        }
      );
    });
  };

  const handleProductTap = (product) => {
    navigation.navigate('description', { product });
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

  const handleSearch = (text) => {
    setSearch(text);
  };

  const gotocart = () => {
    navigation.navigate('Cart', { userId });
  };

  const gotofavourite = () => {
    navigation.navigate('Favourite', { userId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./assets/menu.png')} style={styles.menu} />
          </TouchableOpacity>
          <View style={styles.logobox}>
            <Text style={styles.brandname}>URBAN VOGUE</Text>
            <Text style={styles.tagline}>Where street style meets high fashion</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('./assets/shopping-cart.png')} style={styles.HeaderCart} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.searchbox}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />
        <TouchableOpacity>
          <Image source={require('./assets/edit.png')} style={styles.filter} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>OUR PRODUCTS</Text>
      </View>

      <ScrollView>
        <View style={styles.productlist}>
          {products.map((product, index) => (
            <View key={index} style={styles.productbox}>
              <TouchableOpacity onPress={() => handleProductTap(product)}>
                <Image source={{ uri: product.image_path }} style={styles.productImage} />
                <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'left' }}>{product.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'left' }}>Price: {product.price}RS</Text>
                <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => handleAddToFavourites(product.product_id)}><Image style={styles.f} source={require('./assets/heart.png')} /></TouchableOpacity>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/home-page.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={gotocart}>
          <Image source={require('./assets/shopping-cart.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={gotofavourite}>
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
  productImage: {
    width: 180,
    height: 128,
  },
  f: {
    width: 16,
    height: 16,
  },
  productlist: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  productbox: {
    display: 'flex',
    backgroundColor: 'white',
    width: '47%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    margin: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 50,
  },
  menu: {
    width: 24,
    height: 24,
  },
  logobox: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandname: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: '#876A5B',
  },
  tagline: {
    fontSize: 10,
    color: '#876A5B',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  headerContainer: {
    marginBottom: 30,
  },
  HeaderCart: {
    width: 24,
    height: 24,
  },
  filter: {
    width: 24,
    height: 24,
  },
  searchbox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 230,
    height: 41,
    padding: 5,
    borderRadius: 21.5,
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

export default MainScreenPage;
