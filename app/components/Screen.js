import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginTop: Constants.statusBarHeight,
    height: '100%',
  },
});
export default Screen;
