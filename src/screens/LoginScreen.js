import React, {useState} from 'react';
import {useLinkProps} from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {createKeyboardAwareNavigator} from 'react-navigation';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Toogle from '../components/Toogle';

var {Platform} = React;


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.iosLoginPart}>
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.subText}>Sign to your account</Text>
      <Input title="YOUR EMAIL" placeholder={'Password'} passwordfield={false} />
      <Input title="PASSWORD" placeholder={'Password'} iconshow={true} passwordfield={true}></Input>
      <View style={styles.viewStyle}>
        <Toogle />
        <TextButton
          containerStyle={styles.forgotPasswordContainer}
          textStyle={styles.forgotPasswordText}
          title={'Forgot password?'}
          onPress={() => {}}
        />
      </View>

      <ButtonAuthentication title={'Login'} onPress={() => {}} />
      <TextButton
        containerStyle={styles.registerContainer}
        textStyle={styles.registerText}
        title={"I don't have an account"}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //Login Header
  iosLoginPart: {
    marginTop: (Platform.OS === 'ios') ? 50 : null,
  },
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

export default LoginScreen;
