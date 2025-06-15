
import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const LoginOrSignIn = () => {
  const handleClick =(event) => (
    Alert.alert(event)
  )


  return (

      <View style={styles.LoginOrSignIn}>
        
          <TouchableOpacity style={styles.buttonLogin} onPress={ () => {
            handleClick('Login')

          }}>
            <Text style={styles.buttonTextLeft}>
                      <Link href={"/Login"}>Login</Link>
            </Text>
          </TouchableOpacity>


        <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleClick('Sign in')}>
          <Text style={styles.buttonTextRight}>
            <Link href={"/SignIn"}> Sign in</Link>
            </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  LoginOrSignIn:{
    borderRadius:20,
        borderWidth: 2,  
    borderColor: '#007AFF',
    color:"red",
    width:200,
    flexDirection:'row',
    fontFamily: 'Poppins-Light'

  },

  buttonLogin: {
      flex: 1,
      backgroundColor: '#4C96E0',
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
          justifyContent: 'center',
    alignItems: 'center',

  },

  buttonSignIn: {
      flex: 1,
      backgroundColor: '#FA5A5A',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTextLeft:{
    color: '#EBF3FC',
    fontFamily:'Poppins-Medium',

  },
    buttonTextRight:{
    color: '#EBF3FC',
    fontFamily:'Poppins-Medium',
  }
})

export default LoginOrSignIn