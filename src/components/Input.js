import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({title, password, style}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'darkgray'}
        secureTextEntry={password}
      />
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
});

export default Input;
