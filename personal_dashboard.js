import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PersonalDashboard = ({navigation}) => {
  const backArrow = () => {};

  const handleEditProfile = () => {};

  const handleChangePassword = () => {};

  const handlePersonalSettings = () => {};

  const HandleLogoutButton = () => {
    navigation.navigate('Login');
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

      <View style={styles.overlayContainer}>
      <Image source={require('./assets/user.png')} style={styles.overlayImage} />
      </View>

      <View style={styles.body1}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePersonalSettings} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>orders</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={HandleLogoutButton} style={styles.settingbuttons}>
          <Text style={styles.settingbuttontext}>reviews</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.borderTop} />
  {/* Rest of the content */}
      


      <View style={styles.body2}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>App Info</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePersonalSettings} style={styles.settingbuttons2}>
          <Text style={styles.settingbuttontext2}>Logout</Text>
        </TouchableOpacity>
      </View>

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
    fontFamily: 'Helvetica',
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
    height: 60,
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
    width: 28,
    height: 28,
    justifyContent: 'center',
  },
  FooterIconText:{
    fontFamily: 'Helvetica',
    fontWeight:'100',
  },
});

export default PersonalDashboard;
