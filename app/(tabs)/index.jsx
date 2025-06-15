import { useFonts } from 'expo-font';
import { MotiText } from 'moti';
import { Image, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import LoginOrSignIn from './loginOrSignIn';




export const AnimatedText = ({ text }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', height: 32 }}>
    {text.split('').map((char, index) => (
      <MotiText
        key={index}
        from={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1000,
          delay: index * 90,
          type: 'timing',
        }}
        style={{
          fontSize: 24,
          lineHeight: 28,
          fontFamily: 'Poppins-Bold',
          color: '#534B5F',
        }}
      >
        {char}
      </MotiText>
    ))}
  </View>
);

const index = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });
  
  return (
        <View style={styles.container}>

        <View style={styles.logoName}>
          <AnimatedText text="Tracker.io" />
        </View>

        <Image style={styles.startPageimage} source={require('../../assets/images/startPage/diabetesTester.png')}/>

        <View style={styles.LoginOrSignIn}>
          <LoginOrSignIn />
        </View>
      </View>

  )
}

export default index;

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#E5EFF8',
    flex:1,
    padding:80,
    textAlign: 'center',
    justifyContent: 'center'
  },
logoName: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:20,

},
  startPageimage: {
    marginLeft:30,
    height:200,
    width: 200,
    marginBottom:40
  }
})


