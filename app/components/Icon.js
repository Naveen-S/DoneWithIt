import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
const Icon = ({
  name,
  size = 50,
  backgroundColor = colors.black,
  IconColor = colors.white,
}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      backgroundColor,
      borderRadius: size / 2,
    },
    icon: {},
  });

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={name}
        size={size / 2}
        color={IconColor}
      />
    </View>
  );
};

export default Icon;
