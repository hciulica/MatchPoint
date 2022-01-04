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

var {Platform} = React;

const RegisterScreen = ({navigation, iconshow}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');

  const handleSignUp = () => {
    if (password !== cpassword) {
      alert('Passwords do not match.');
    } else {
      auth
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch(error => alert(error.message));

      console.log('Email:', email);
      console.log('Password:', password);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.loginText}>Register</Text>
      <Text style={styles.subText}>Create your account</Text>
      <Input title="YOUR NAME" passwordfield={false} iconshow={false} />
      <Input
        title="EMAIL"
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
      <Input
        title="CONFIRM PASSWORD"
        iconshow={false}
        onChangeText={newValue => setcPassword(newValue)}
      />

      <ButtonAuthentication title={'Register'} onPress={handleSignUp} />
      <TextButton
        containerStyle={styles.registerContainer}
        textStyle={styles.registerText}
        title={'I have an account'}
        onPress={() => navigation.navigate('Login')}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : null,
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

  registerContainer: {
    marginTop: 30,
    marginBottom: 20,
  },

  registerText: {
    fontSize: 17,
    fontWeight: '400',
  },
});

export default RegisterScreen;
