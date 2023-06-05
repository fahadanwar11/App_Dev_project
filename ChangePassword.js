import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const ChangePassword = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const backArrow = () => {
    navigation.navigate('Setting');
  };

  const handleEditProfile = () => {};

  const handleChangePassword = () => {};

  const handlePersonalSettings = () => {};

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const HandleLogoutButton = () => {
    navigation.navigate('Login');
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
        
      <View style={styles.logobox}>
        <TouchableOpacity onPress={backArrow} style={styles.backbutton}>
          <Image source={require('./assets/left-arrow.png')} style={styles.leftarrow} />
        </TouchableOpacity>
        <Text style={styles.brandname}>URBAN VOGUE</Text>
        <Text style={styles.tagline}>Where street style meets high fashion</Text>
      </View>

     
        <View style={styles.maintext}>
          <Text style={styles.textchangepassword}>Change Password</Text>
      </View>

      <View style={styles.body1}>
        <TextInput
          style={styles.input}
          placeholder="Old Password"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
        />
        

        <TouchableOpacity onPress={handleChangePassword} style={styles.settingbuttons2}>
          <Text style={styles.updatebuttontext}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/home-page.png')} style={styles.footericons} />
          <Text style={styles.footerIconText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/shopping-cart.png')} style={styles.footericons} />
          <Text style={styles.footerIconText}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/heart.png')} style={styles.footericons} />
          <Text style={styles.footerIconText}>FAVORITES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/user.png')} style={styles.footericons} />
          <Text style={styles.footerIconText}>PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./assets/settings.png')} style={styles.footericons} />
          <Text style={styles.footerIconText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start', 
    },
    backbutton: {
      paddingTop: 30,
      justifyContsent:'center',
      alignSelf:'flex-start',
    },
    leftarrow: {
      width: 32,
      height: 32,
    },
    logobox: {
      marginTop: 0, 
      marginBottom: 15,
    },
    brandname: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Helvetica',
      color: '#876A5B',
    },
    tagline: {
      fontSize: 20,
      color: '#876A5B',
      fontFamily: 'Helvetica',
    },

    textchangepassword: {
        fontSize: 30,
        color: 'Black',
        fontFamily: 'Helvetica',
        fontWeight: 'Bold',
      },
    body1: {
        flex: 1,
        width:'100%',
        height:50,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      input: {
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 0.5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        padding:3,
        marginBottom: 2.5,
        borderRadius: 5,
      },

      settingbuttons2: {
        height: 40,
        width: '70%',
        backgroundColor: '#282E4A',
        borderRadius: 15,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      updatebuttontext: {
        fontSize:20,
        color: 'white',
        
      },

  footer: {
    flexDirection: 'row',
    width: '100%',
    maxHeight: '7.5%',
    flex:1,
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
  footerIconText: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
});

export default ChangePassword;
