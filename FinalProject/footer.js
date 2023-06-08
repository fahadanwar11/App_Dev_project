import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
    return(
        <View style={styles.container}>
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
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        maxHeight: '10%',
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
    
export default Footer;
    

