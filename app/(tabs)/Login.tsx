import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>login Page</Text>
      <Link style={styles.buttonBack} href={"/"}>back</Link>
    </View>
  )
}

export default Login



const styles = StyleSheet.create({
  buttonBack:{
    fontSize:40,
  }
  
})