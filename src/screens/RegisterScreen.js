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
import { authentication } from '../api/firebase';
import { db } from '../api/firebase';
import { createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';
import useAuthentication from '../hooks/useAuthentication';
import { withNavigation } from 'react-navigation';

var {Platform} = React;

const RegisterScreen = ({navigation, iconshow}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [username, setUsername] = useState('');
  const [uidUser, setuidUser] = useState("");
  
  let data = { uid : 'test' };

  const [setSignedIn, getSignedIn, isSignedIn] = useAuthentication();

  const getAuthenticationSign = () => {
    console.log('UID-ul nou setat e :', data.uid);
  }

  const handleSignUp = () => {
    if (password !== cpassword) {
      alert('Passwords do not match.');
    } else {
      createUserWithEmailAndPassword(authentication, email.trim(), password)
      .then((re) => {
          console.log(re);
          const user = re.user;
          setUserFirestore(username, user.uid);
          data.uid = user.uid;
          navigation.navigate('Home', { user_uid: data.uid })
        })
        .catch((error,re) => {alert(error.message);
          console.log(re);
        });          
    }
  };

  const setUserFirestore = (usernamefirestore, uidfirestore) => {
     setDoc(doc(db, "users", uidfirestore), {
       name: usernamefirestore
     });
   }


  // const getDataFirestore = async () => {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapShot = await getDocs(citiesCol);
  //   const cityList = citySnapShot.docs.map(doc => doc.data());
    
  //   console.log(cityList);
  // }
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.loginText}>Register</Text>
      <Text style={styles.subText}>Create your account</Text>
      <Input 
        title="YOUR NAME" 
        passwordfield={false} 
        iconshow={false}
        onChangeText={newValue => setUsername(newValue)} />
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
    
      <ButtonAuthentication title={'Register'} onPress={handleSignUp}
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
