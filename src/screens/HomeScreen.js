import React, {useState, useEffect} from 'react';
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
import { authentication } from '../api/firebase';
import { db } from '../api/firebase';
import { createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { collection, getDoc, setDoc, doc, addDoc } from 'firebase/firestore/lite';
import useAuthentication from '../hooks/useAuthentication';
import { withNavigation } from 'react-navigation';

var {Platform} = React;

const HomeScreen = ({ navigation }) => {
  
  const uiduser = navigation.getParam('user_uid');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  console.log('Uiduser in home', uiduser);
  console.log(uiduser);

  useEffect(() => {
    getDataFirestore();
  });

  const signOutUser = () => {
    signOut(authentication)
    .then((re) => {
      alert('User disconnected');
    })
    .catch((err) => {
      alert(err);

    })
    navigation.navigate('Login');
  }

  const getDataFirestore = async () => {
      const docRef = doc(db, "users", uiduser);
      const docSnap = await getDoc(docRef);
      console.log('AutoCall:',uiduser);
      console.log("Document data:", await docSnap.get('name'));
      setUserName(docSnap.get('name'));
      console.log(authentication.currentUser.email);
      setEmail(authentication.currentUser.email);
      // setEmail
  }

    return (
      <View style={styles.container}>
          <Text>Logged in:</Text>
          {/* <Text>{uiduser}</Text> */}
          <Text>Username: {userName}</Text>
          <Text>Email: {email} </Text>
          <Button title = 'Sign out' onPress = {signOutUser} />
    </View>
    );
    

};
   
const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS==='ios' ? 50 : null,
      marginLeft: Platform.OS === 'ios' ? 10 : null
    }
});

export default HomeScreen;
