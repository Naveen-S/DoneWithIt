import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';
import Card from '../components/Card';

const WelcomeScreen = () => {
  const tagLine = "Sell What You Don't Need! a";
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}></Image>
        <Text style={styles.tagline}> {tagLine} </Text>
      </View>
      <Card
        title='Red Jacket'
        subTitle='$100'
        image={require('../assets/jacket.jpg')}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          title='Login'
          onPress={() => {
            console.log('tapped');
          }}
        />
        <AppButton
          title='Register'
          color='secondary'
          onPress={() => {
            console.log('signup tapped');
          }}
        />

        {/* <View style={[styles.buttonStyle, styles.green]}></View> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    paddingBottom: 10,
  },
  tagline: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 10,
    width: '100%',
  },
});
export default WelcomeScreen;
