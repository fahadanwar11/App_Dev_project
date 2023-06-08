import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const EditInformation = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const backArrow = () => {
    navigation.navigate('Setting')
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };
  const handleLastNameChange = (text) => {
    setLastName(text);
  };
  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };
  const handleAddressChange = (text) => {
    setAddress(text);
  };
  const handleEditProfile = (text) => {
    console.log("hi");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={backArrow} style={styles.backbutton}>
          <Image source={require('./assets/left-arrow-white.png')} style={styles.leftarrow} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Edit Information</Text>
      </View>

      <View style={styles.body1}>
      <View style={styles.textview}>
        <Text style={styles.text1}> First Name: </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <View style={styles.textview}>
        <Text style={styles.text1}> Last Name: </Text></View>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        <View style={styles.textview}>
        <Text style={styles.text1}>Contact:</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
        />
        <View style={styles.textview}>
        <Text style={styles.text1}>Address:</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={handleAddressChange}
        />

        <TouchableOpacity onPress={handleEditProfile} style={styles.settingbuttons2}>
          <Text style={styles.updatebuttontext}>Update</Text>
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
    width: '100%',
    backgroundColor: 'white',
  },
  backbutton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingbuttons: {
    height: 30,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:2.5,
  },
  settingbuttons2: {
    height: 50,
    width: '50%',
    top:10,
    bottom:20,
    backgroundColor: '#282E4A',
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '90%',
    height: 60,
    marginTop: '5%',
    backgroundColor: '#282E4A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    alignSelf: 'center',
  },
  leftarrow: {
    marginLeft:-40,
    width: 32,
    height: 32,
  },
  headertext: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
  updatebuttontext: {
    color: 'white',
    
  },
  btn1: {
    height: 60,
    width: '30%',
    backgroundColor: '#282E4A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body1: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin:10,
    backgroundColor: 'white',
    marginBottom:'7.5%', 
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
    padding:10,
    marginBottom: 2.5,
    borderRadius: 5,
  },
  text1: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    textAlign:'left',
    
  },
  textview:{
    width: '85%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    height:0,
    backgroundColor:'white',   
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
  footerIconText: {
    fontFamily: 'montserrat',
    fontWeight: '100',
    fontSize: 12,
    color:'#697C86',
  },
});

export default EditInformation;
