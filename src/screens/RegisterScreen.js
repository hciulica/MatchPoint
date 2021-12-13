import React, {useState} from 'react';
import {useLinkProps} from '@react-navigation/native';
import { Text,StyleSheet,View, Button,TouchableOpacity,Switch,} from 'react-native';
import {createKeyboardAwareNavigator} from 'react-navigation';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Toogle from '../components/Toogle';

const RegisterScreen = ({navigation}) => {
  return (
    <View>
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.subText}>Create your account</Text>
        <Input title="YOUR NAME" placeholder={'Password'} password={false} />
        <Input title="EMAIL" placeholder={'Password'} password={false} />
        <Input
             title="PASSWORD" placeholder={'Password'} password={true} eyevisible={true}>
        </Input>
        <Input title="CONFIRM PASSWORD" placeholder={'Password'} password={true}></Input>
        <ButtonAuthentication title={'Register'} onPress={() => {}} />
        <TextButton
            containerStyle={styles.registerContainer}
            textStyle={styles.registerText}
            title={"I have an account"}
            onPress={() => navigation.navigate('Login')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  //Login Header
  loginText: {
    marginHorizontal: 20,
    fontSize: 22,
    color: '#424242',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7,
  },
  subText: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#979797',
    marginBottom: 30,
  },

  //textButton styles
  forgotPasswordContainer: {
    marginTop: -18,
    marginRight: 20,
  },

  forgotPasswordText: {
    color: '#A09C9C',
    marginTop: 0,
    fontSize: 15,
    fontWeight: '500',
  },

  registerContainer: {
    marginTop: 30,
  },

  registerText: {
    fontSize: 17,
    fontWeight: '400',
  },

  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RegisterScreen;
