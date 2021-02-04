import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}></Icon>
        <AppText style={styles.label}> {item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
export default CategoryPickerItem;
