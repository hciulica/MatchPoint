import React, {useState, useEffect, useContext} from 'react';
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
import {authentication} from '../api/firebase';
import {db} from '../api/firebase';
import {
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import {collection, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite';
import useAuthentication from '../hooks/useAuthentication';
import {withNavigation} from 'react-navigation';
import {AuthContext} from '../navigation/AuthProvider';

var {Platform} = React;

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const {user, logout} = useContext(AuthContext);
  console.log('HomeScreen');
  console.log(user);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user}</Text>

      {/* <Text>Logged in:</Text>
       <Text>{uiduser}</Text> 
       <Text>Username: {userName}</Text>
      <Text>Email: {email} </Text>  */}
      <Button title="Sign out" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : null,
    marginLeft: Platform.OS === 'ios' ? 10 : null,
  },
  text: {
    color: '#000000',
  },
});

export default HomeScreen;
