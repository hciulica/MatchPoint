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
import {withNavigation} from 'react-navigation';
import {AuthContext} from '../navigation/AuthProvider';
import Header from '../components/Header';

const SettingsScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const {user, logout} = useContext(AuthContext);
  console.log('HomeScreen');
  console.log(user);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{user}</Text>
      <Button title="Sign out" onPress={() => logout()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : null,
    marginLeft: Platform.OS === 'ios' ? 10 : null,
  },
  text: {
    marginTop: 30,
    color: '#000000',
  },
});

export default SettingsScreen;
