import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SettingScreen = ({navigation}) => {
  const backArrow = () => {
    navigation.goBack();
  };

  const handleEditProfile = () => {
    navigation.navigate('EditInfo');
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const handlePersonalSettings = () => {
    navigation.navigate('Dashboard');
  };

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
        <Text style={styles.headertext}>SETTINGS</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePersonalSettings} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>Personal Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={HandleLogoutButton} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>Logout Button</Text>
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
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backbutton: {
    position: 'absolute',
    top: 5,
    left: 5,
    padding: 10,
  },
  header: {
    width: '100%',
    height: '25%',
    backgroundColor: '#282E4A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  body: {
    width: '100%',
    height: '75%',
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '20%',
  },
  settingbuttons: {
    width: 250,
    height: 35,
    backgroundColor: '#282E4A',
    borderRadius: 17,
    margin: 15,
  },
  settingbuttontext: {
    fontSize: 18,
    fontFamily: 'montserrat',
    fontWeight: '100',
    color: 'white',
    padding: 5,
    textAlign: 'center',
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
    padding:10,
  },
  footericons: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  FooterIconText:{
    fontFamily: 'montserrat',
    fontWeight:'100',
    fontSize: 12,
    color:'#697C86',

  },
});

export default SettingScreen;
 