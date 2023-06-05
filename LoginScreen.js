import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import db from './Database';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND user_password = ?',
        [email, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            // User found, navigate to another screen
            const userId = rows.item(0).user_id;
            console.log('user id = ',userId);
            navigation.navigate('Main', { userId });
          } else {
            // Invalid email or password
            console.log('Invalid email or password');
          }
        },
        (_, error) => {
          console.log('Error executing SQL query:', error);
        }
      );
    });
  };
  const handleGoogleSignIn = () => {
    // Handle Google Sign-In functionality
  };
  const handleFacebookSignIn = () => {
    // Handle Facebook Sign-In functionality
  };
  const forgotPassword = () => {
  
  };
  const SignIn = () => {
    navigation.navigate("Register")
  };
  return (
    <View style={styles.container}>
      <View style={styles.logobox}>
        <Text style={styles.brandname}>URBAN VOGUE</Text>
        <Text style={styles.tagline}>Where street style meets high fashion</Text>
      </View>
      <View style={styles.formbox}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={email}
          onChangeText={handleEmailChange}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
            <Text style={styles.showPasswordButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
            <Text style={styles.loginbuttontext}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.forgotpassword} onPress={forgotPassword}>
            <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style = {{fontFamily: 'Helvetica',fontWeight: 'bold',fontSize: 14,marginTop: 25,}}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={SignIn}>
          <Text style={{fontFamily: 'Helvetica',fontWeight: 'bold',fontSize: 14, color:'#4A1BAC', textDecorationLine: 'underline',paddingTop: 25}}>Sign Up</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
            <Image
            source={require('./assets/google.png')}
            style={styles.googleLogo}/>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookSignIn}>
            <Image
            source={require('./assets/facebook.png')}
            style={styles.facebookLogo}/>
            <Text style={styles.facebookButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin:15,
    justifyContent: 'flex-start', 
  },
  logobox: {
    marginTop: 80, 
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
  formbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80, 
    marginBottom: 15,

  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    marginBottom: 25,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 15,
    marginBottom: 25,
    borderRadius: 5,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  showPasswordButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginbutton:{
    display: 'flex',
    width:300,
    backgroundColor: '#282E4A',
    borderRadius: 17,
  },
  loginbuttontext: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  forgotpassword:{
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf:'flex-end',
    marginTop: 9,
    textDecorationLine: 'underline',
  },
  googleButton: {
    marginTop: 20,
    flexDirection: 'row',
    width: 250,
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  googleLogo: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Helvetica'
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    backgroundColor: '#3B5998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  facebookLogo: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  facebookButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Helvetica',
    alignSelf: 'center',
  },
});

export default LoginScreen;
