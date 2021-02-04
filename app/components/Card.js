import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.buttonContainer}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.white,
    marginVertical: 10,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '100%',
  },
  buttonContainer: {
    padding: 20,
  },
});
export default Card;
