import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

// const items = [
//   {
//     id: 1,
//     label: 'Furniture',
//     value: 1,
//   },
//   {
//     id: 2,
//     label: 'Sofa',
//     value: 2,
//   },
//   {
//     id: 3,
//     label: 'Diwan',
//     value: 3,
//   },
// ];
const AppPicker = ({
  icon,
  items,
  numColumns = 1,
  selectedItem,
  onSelectItem,
  placeholder = 'Category',
  PickerItemComponent = PickerItem,
  width = '100%',
}) => {
  // For testing
  // const [selectedCategory, setSelectedCategory] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.mediumGray}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}> {selectedItem}</AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder} </AppText>
          )}

          <MaterialCommunityIcons
            style={styles.icon}
            name='chevron-down'
            size={25}
            color={colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button
            onPress={() => {
              setModalVisible(false);
            }}
            title='Close'></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            numColumns={numColumns}
            renderItem={({ item }) => {
              return (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    console.log(item);
                    setModalVisible(false);
                    onSelectItem(item.label);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
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
  placeholder: {
    flex: 1,
    color: colors.mediumGray,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppPicker;
