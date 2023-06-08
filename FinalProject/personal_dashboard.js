import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PersonalDashboard = ({navigation}) => {

  const backArrow = () => {
    navigation.navigate('Main');
  };

  const handlePersonalSettings = () => {};

  const HandleLogoutButton = () => {
    navigation.navigate('Login');
  };

  const gotohome = () => {
    navigation.navigate('Main');
  };
  const gotocart = () => {
    navigation.navigate('Cart');
  };

  const gotofavourite = () => {
    navigation.navigate('Favorite');
  };

  const gotodashboard = () => {
    navigation.navigate('Dashboard');
  };

  const gotosettings = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={backArrow}>
            <Image source={require('./assets/left-arrow-white.png')} style={styles.leftarrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headertext}>DASHBOARD</Text>
      </View>

      <View style={styles.body1}>
        <TouchableOpacity style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>HISTORY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>ORDERS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>REVIEWS</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.borderTop} />
  


      <View style={styles.body2}>
        <TouchableOpacity onPress={gotosettings} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>App Info</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={HandleLogoutButton} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={gotohome}>
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

        <TouchableOpacity style={styles.footerItem} onPress={gotodashboard}>
          <Image source={require('./assets/user.png')} style={styles.footericons} />
          <Text style={styles.FooterIconText}>PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={gotosettings}>
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
    backgroundColor:'white',
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
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  body1: {
    width: '100%',
    height: '75%',
    flex: 0.5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 0.1,
    backgroundColor:'white',
  },
  settingbuttons: {
    flex: 1,
    height: 40,
    display:'flex',
    backgroundColor: '#282E4A', 
    borderRadius: 30,
    marginHorizontal: 5,
  },
  
  body2: {
    width: '100%',
    height: '75%',
    flex: 0.5,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.1,
    backgroundColor:'white',
  },
  
  settingbuttontext: {
    display:'flex',
    fontSize: 10,
    fontFamily: 'montserrat',
    fontWeight: '100',
    color: 'white',
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:13,
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
    width: 200,
    height: 35,
    backgroundColor: '#282E4A',
    borderRadius: 17,
    margin: 10,
  },
  overlayContainer: {
    position: 'absolute',
    top: '20%',
    left: '35%',
    width: '30%',
    height: '10%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius: '15%',
  },
  overlayImage: {
    width:  '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 1,
  },
  borderTop: {
    position: 'absolute',
    top: '58%',
    left: '5%',
    width: '90%',
    height: 2,
    backgroundColor: 'black',
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
    padding:3,
  },
  footericons: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  FooterIconText:{
    fontFamily: 'montserrat',
    fontWeight: '100',
    fontSize: 12,
    color:'#697C86',
  },
});

export default PersonalDashboard;
