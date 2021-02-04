import React from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';
import SubmitButton from '../components/forms/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
});

const category = [
  {
    id: 1,
    label: 'Furniture',
    value: 1,
    icon: 'lamp',
    backgroundColor: colors.danger,
  },
  {
    id: 2,
    label: 'Car',
    value: 2,
    icon: 'car',
    backgroundColor: 'orange',
  },
  {
    id: 3,
    label: 'Camera',
    value: 3,
    icon: 'camera',
    backgroundColor: colors.warning,
  },
  {
    id: 4,
    label: 'Games',
    value: 4,
    icon: 'cards',
    backgroundColor: 'green',
  },
  {
    id: 5,
    label: 'Clothing',
    value: 5,
    icon: 'shoe-heel',
    backgroundColor: colors.secondary,
  },
  {
    id: 6,
    label: 'Sports',
    value: 6,
    icon: 'football',
    backgroundColor: 'blue',
  },
  {
    id: 7,
    label: 'Movies and Music',
    value: 7,
    icon: 'headphones',
    backgroundColor: 'skyblue',
  },
  {
    id: 8,
    label: 'Books',
    value: 8,
    icon: 'book',
    backgroundColor: 'purple',
  },
  {
    id: 3,
    label: 'Other',
    value: 3,
    icon: 'tab',
    backgroundColor: colors.mediumGray,
  },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}>
        <>
          <AppFormField
            name='title'
            maxLength={255}
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            placeholder='Title'
          />
          <AppFormField
            name='price'
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            placeholder='Price'
            keyboardType='numeric'
            width={120}
          />
          <AppFormPicker
            name='category'
            numColumns={3}
            items={category}
            placeholder='Category'
            PickerItemComponent={CategoryPickerItem}
            width='50%'
          />
          <AppFormField
            name='description'
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            placeholder='Description'
            multiline={true}
            numberOfLines={3}
          />
          <SubmitButton title='Post' />
        </>
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
