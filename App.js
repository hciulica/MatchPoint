import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation/stack';
import {AuthProvider} from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import React, {useState, useEffect} from 'react';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
