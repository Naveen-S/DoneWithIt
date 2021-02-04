import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppInput from './app/components/AppInput';
import AppPicker from './app/components/AppPicker';
import AccountScreen from './app/Screens/AccountScreen';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ListingEditScreen from './app/Screens/ListingEditScreen';
import ListingsScreen from './app/Screens/ListingsScreen';
import LoginScreen from './app/Screens/LoginScreen';
import MessageScreen from './app/Screens/MessageScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';

export default function App() {
  return <ListingEditScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
