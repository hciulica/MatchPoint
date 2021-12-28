import React, {useState} from 'react';
import {useLinkProps} from '@react-navigation/native';
import { Text,StyleSheet,View, Button,TouchableOpacity,Switch,TextInput} from 'react-native';
import {createKeyboardAwareNavigator} from 'react-navigation';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Toogle from '../components/Toogle';
import Feather from 'react-native-vector-icons/Feather';

var {Platform} = React;

const RegisterScreen = ({navigation, iconshow}) => {
  return (
    <View style = {styles.iosRegisterPart}> 
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.subText}>Create your account</Text>
        <Input title="YOUR NAME" placeholder={'Password'} passwordfield={false} />
        <Input title="EMAIL" placeholder={'Password'} passwordfield={false}/>
        <View>
            <Input style = {styles.passwordShow }
                title="PASSWORD" placeholder={'Password'} iconshow={true}>
            </Input>
        </View>
        <Input title="CONFIRM PASSWORD" placeholder={'Password'} iconshow={false}></Input> 
        
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
  iosRegisterPart:{
    marginTop: (Platform.OS === 'ios') ? 50 : null
  },
   passwordShow: {
        fontSize: 30,
        paddingLeft: 320,
        borderColor: 'red'
   },
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
