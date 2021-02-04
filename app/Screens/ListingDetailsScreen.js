import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { vmin, vmax, vw, vh } from 'react-native-expo-viewport-units';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/jacket.jpg')}></Image>
        <View style={styles.buttonContainer}>
          <AppText style={styles.title}> Red jacket for sale</AppText>
          <AppText style={styles.subTitle}> $100 </AppText>
        </View>
      </View>
      <ListItem
        title='Mosh Hamedani'
        subTitle='5 listings'
        image={require('../assets/mosh.jpg')}></ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: vmax(50),
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
    height: vh(40),
    width: '100%',
  },
  buttonContainer: {
    padding: 20,
  },
});
export default ListingDetailsScreen;
