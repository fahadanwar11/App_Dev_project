import { Logs } from 'expo';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from './SettingScreen';
import MainScreenPage from './MainPageScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen';
import EditInformation from './EditInformation';
import ChangePassword from './ChangePassword';
import DescriptionPageScreen from './DescriptionPageScreen';
import PersonalDashboard from './personal_dashboard';
import FavouritesPage from './favourites';
import CartPage from './cart';
import OrderPage from './Order';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    montserrat: require('./assets/fonts/Montserrat-regular.ttf'),
  });
  if (!loaded){
    return null;
  };
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false}}>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>


          <Stack.Screen name='Main' component={MainScreenPage}/>
          <Stack.Screen name='description' component={DescriptionPageScreen}/>
          <Stack.Screen name='Cart' component={CartPage}/>
          <Stack.Screen name='Favorite' component={FavouritesPage}/>
          <Stack.Screen name='Order' component={OrderPage}/>


          <Stack.Screen name='Dashboard' component={PersonalDashboard}/>
          <Stack.Screen name='Setting' component={SettingScreen}/>
          <Stack.Screen name='EditInfo' component={EditInformation}/>
          <Stack.Screen name='ChangePassword' component={ChangePassword}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});