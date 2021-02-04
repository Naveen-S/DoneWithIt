import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessages from './ErrorMessages';

const AppFormPicker = ({
  items,
  name,
  numColumns,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        selectedItem={values[name]}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        width={width}></AppPicker>
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
