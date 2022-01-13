import React, {useState, useContext} from 'react';
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
import GeneralButton from '../components/GeneralButton';
import TextButton from '../components/TextButton';
import Feather from 'react-native-vector-icons/Feather';
import {withNavigation} from 'react-navigation';
import {AuthContext} from '../navigation/AuthProvider';
var {Platform} = React;

const RegisterScreen = ({navigation, iconshow}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [username, setUsername] = useState('');
  const [uidUser, setuidUser] = useState('');
  const {handleSignUp} = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.loginText}>Register</Text>
      <Text style={styles.subText}>Create your account</Text>
      <Input
        title="YOUR NAME"
        passwordfield={false}
        iconshow={false}
        onChangeText={newValue => setUsername(newValue)}
      />
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

      <GeneralButton
        title={'Register'}
        onPress={() =>
          handleSignUp(email, password, username, cpassword, 'intermediar')
        }
      />
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
