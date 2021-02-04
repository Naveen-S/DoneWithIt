import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            style={styles.chevron}
            name='chevron-right'
            color={colors.mediumGray}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  textContainer: {
    marginLeft: 10,
    // marginTop: 10,
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.gray,
    fontWeight: 'normal',
    // textTransform: 'capitalize',
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  chevron: {
    flex: 1,
  },
});
export default ListItem;
