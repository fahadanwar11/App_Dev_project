import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { insertUser, checkEmailExists } from './Database';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const backArrow = () => {
    navigation.navigate('Login');
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = async (text) => {
    setEmail(text);
    setEmailError(validateEmail(text) ? '' : 'Email format is not correct');

    if (await checkEmailExists(text)) {
      setEmailError('Email is already taken');
    }
  };

  const handleDobChange = (text) => {
    setDob(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(text.length >= 8 ? '' : 'Password should be at least 8 characters');
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Email format is not correct');
      return;
    }

    if (firstName.trim() === '' || lastName.trim() === '' || dob.trim() === '' || phoneNumber.trim() === '' || password.trim() === '') {
      setModalContent('Please fill in all fields');
      toggleModal();
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters');
      return;
    }

    try {
      const userId = await insertUser({
        email,
        firstName,
        lastName,
        dob,
        password,
        phoneNumber,
      });
      console.log('User ID:', userId);
      setModalContent('User registered successfully');
      toggleModal();
    } catch (error) {
      console.log('Error:', error);
      setModalContent('Failed to register user');
      toggleModal();
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={backArrow}>
        <Image source={require('./assets/left-arrow.png')} style={styles.leftarrow} />
      </TouchableOpacity>

      <View style={styles.logobox}>
        <Text style={styles.brandname}>URBAN VOGUE</Text>
        <Text style={styles.tagline}>Where street style meets high fashion</Text>
        <Text style={styles.smallheading}>LET'S REGISTER</Text>
      </View>
      <View style={styles.formbox}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="DOB: (DD/MM/YYYY)"
          value={dob}
          onChangeText={handleDobChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <View style={styles.button}>
          <Button color="#282E4A" title="SUBMIT" onPress={handleSubmit} />
        </View>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{modalContent}</Text>
          <Button title="OK" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    margin:15,
  },
  backbutton: {
    width: 400,
    display: 'flex',
  },
  leftarrow: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  logobox: {
    display: 'flex',
    width: '100%',
    margin: 0,
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
    textAlign: 'center',
  },
  smallheading: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
  },
  formbox: {
    width: '100%',
    marginTop: 50,
  },
  input: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    marginBottom: 25,
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 70,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    display: 'flex',
    marginBottom: 10,
    fontFamily: 'Helvetica',
    alignSelf: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default RegisterScreen;
