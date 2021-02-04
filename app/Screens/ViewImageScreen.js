import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name='close' color={colors.white} size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name='trash-can-outline'
            color={colors.white}
            size={35}
          />
        </View>
      </View>

      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 40,
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
});
export default ViewImageScreen;
