import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {createKeyboardAwareNavigator} from 'react-navigation';

const StartScreen = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Start')} title="Start Page" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#000000',
  },
});

export default StartScreen;