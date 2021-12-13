import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Input = ({title, password, style, eyevisible}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View>
        {/* <Feather name = "eye" style = {styles.showeye}/> */}
          <TextInput
            style={styles.input}
            placeholderTextColor={'darkgray'}
            secureTextEntry={password}
          />
      </View>
      {/* <Feather name = "eye" style={styles.showeye}/> */}
      {/* <Feather name = "eye-off"/> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 3,
    color: '#A09C9C',
    fontSize: 13,
  },
  input: {
    marginHorizontal: 20,
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    color: 'black',
    marginTop: 2,
    marginBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  showeye:{
    fontSize: 30,
    marginLeft: 330,
    borderRadius: 50
  },
  
});

export default Input;
