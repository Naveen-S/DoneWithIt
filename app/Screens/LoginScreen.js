import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}>
        <>
          <AppFormField
            name='email'
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            keyboardType='email-address'
            icon='email'
            placeholder='Email'
          />
          <AppFormField
            name='password'
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            secureTextEntry
            icon='lock'
            placeholder='Password'
          />
          <SubmitButton title='Login' />
        </>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // alignItems: 'center',
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    margin: 50,
  },
});
export default LoginScreen;
