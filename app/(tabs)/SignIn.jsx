import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link style={styles.buttonBack} href={"/"}>back</Link>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  buttonBack:{
    fontSize:40,
  }
})