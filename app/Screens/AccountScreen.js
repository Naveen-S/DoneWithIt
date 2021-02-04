import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    id: 'My Listings',
    name: 'My Listings',
    icon: 'format-list-bulleted',
    color: colors.primary,
  },
  {
    id: 'My Messages',
    name: 'My Messages',
    icon: 'email',
    color: colors.secondary,
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.mainContainer}>
      <View style={styles.container}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='programmingwithmosh@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.name}
                IconComponent={
                  <Icon name={item.icon} backgroundColor={item.color} />
                }
              />
            );
          }}
          ItemSeparatorComponent={ListItemSeparator}></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          title='Log out'
          IconComponent={
            <Icon name='logout' backgroundColor={colors.warning} />
          }
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.lightGray,
  },
  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  flatlist: {
    height: '100%',
  },
});
export default AccountScreen;
