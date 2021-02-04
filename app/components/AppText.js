import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import defaultStyles from '../config/styles';

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});
export default AppText;
