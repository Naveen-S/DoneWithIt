import React from 'react';
import { useFormikContext } from 'formik';
import AppInput from '../AppInput';
import ErrorMessages from './ErrorMessages';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppInput
        onBlur={() => {
          setFieldTouched(name);
        }}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
