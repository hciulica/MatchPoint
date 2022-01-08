import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Feather from 'react-native-vector-icons/Feather';
import {auth} from '../api/firebase/';
import {} from 'firebase/auth';
import Toogle from '../components/Toogle';
import { authentication } from '../api/firebase';
import { db } from '../api/firebase';
import { signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';

var {Platform} = React;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  let data = { uid : 'test' };

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email.trim(), password)
      .then(re => {
        console.log(re);
        const user = re.user;
        data.uid = user.uid;
        navigation.navigate('Home', { user_uid: data.uid })
      })
      .catch(error => alert(error.message));
  };

  const handleForgotPassword = () => {
    auth
      .sendPasswordResetEmail(email.trim())
      .then(() => {
        alert('Reset email has been sent to ' + email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <ScrollView style={styles.iosLoginPart}>
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.subText}>Sign to your account</Text>
      <Input
        title="YOUR EMAIL"
        passwordfield={false}
        iconshow={false}
        onChangeText={newValue => setEmail(newValue)}
      />

      <Input
        title="PASSWORD"
        passwordfield={true}
        iconshow={true}
        onChangeText={newValue => setPassword(newValue)}
      />

      <View style={styles.viewStyle}>
        <Toogle />
        <TextButton
          containerStyle={styles.forgotPasswordContainer}
          textStyle={styles.forgotPasswordText}
          title={'Forgot password?'}
          onPress={handleForgotPassword}
        />
      </View>

      <ButtonAuthentication title={'Login'} onPress={handleLogin} />
      <TextButton
        containerStyle={styles.registerContainer}
        textStyle={styles.registerText}
        title={"I don't have an account"}
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //Login Header
  iosLoginPart: {
    marginTop: Platform.OS === 'ios' ? 50 : null,
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
    marginTop: Platform.OS === 'ios' ? 20 : null,
  },
});

export default LoginScreen;
