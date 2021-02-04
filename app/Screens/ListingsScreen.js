import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import colors from '../config/colors';

import Screen from '../components/Screen';

const listItems = [
  {
    id: 1,
    name: 'Red Jacket',
    price: '100',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    name: 'Couch',
    price: '400',
    image: require('../assets/couch.jpg'),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listItems}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.name}
              subTitle={` $${item.price}`}
              image={item.image}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.lightGray,
    height: '100%',
  },
});
export default ListingsScreen;
