import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

const AppInput = ({ style, icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name='email'
          size={25}
          color={colors.mediumGray}
        />
      )}
      <TextInput
        style={[styles.text, defaultStyles.text, style]}
        placeholderTextColor={colors.mediumGray}
        placeholder='Your Name'
        {...otherProps}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 25,
    // width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
export default AppInput;
