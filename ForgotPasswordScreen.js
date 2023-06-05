import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [OTP, setOTP] = useState('');
    const [password, setpassword] = useState('');
    const [passwordagain, setPasswordAgain] = useState('');
 
    const handleEmail = (text) => {
        setEmail(text);
      };
    const handleOTP = (text) => {
        setOTP(text);
    };
    const handlePassword = (text) => {
        setpassword(text);
    };
    const handlePasswordAgain = (text) => {
        setPasswordAgain(text);
    };

    const backArrow = () => {
        navigation.navigate('Login');
    };
    const handleSubmit = () => {
        navigation.navigate('Login');        
    }

    return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={backArrow}>
        <Image source={require('./assets/left-arrow.png')} style={styles.leftarrow} />
      </TouchableOpacity>
      <View style={styles.logobox}>
        <Text style={styles.brandname}>URBAN VOGUE</Text>
        <Text style={styles.tagline}>Where street style meets high fashion</Text>
        <Text style={styles.smallheading}>RECOVER PASSWORD</Text>
      </View>

      <View style={styles.formbox}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={handleEmail}
        />

        <Text style={styles.otpText}>ENTER THE OTP TO RESET PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={OTP}
          onChangeText={handleOTP}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={password}
          onChangeText={handlePassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password Again"
          value={passwordagain}
          onChangeText={handlePasswordAgain}
        />
      </View> 
      <View style={styles.button}>
          <Button color="#282E4A" title="SUBMIT" onPress={handleSubmit} />
      </View>
    </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    otpText:{
        display:'flex',
        fontSize:14,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 300,
        height: 70,
        fontWeight: 'bold',
    },
  });
export default ForgotPasswordScreen;