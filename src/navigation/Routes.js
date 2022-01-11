import {createAppContainer} from 'react-navigation';
import React, {useContext, useState, useEffect} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import AuthStack from './AuthStack';
import Navigation from './Navigation';
import {AuthContext} from './AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import {onAuthStateChanged} from 'firebase/auth';
import {authentication} from '../api/firebase';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const subscriber = onAuthStateChanged(authentication, user => {
      if (user) {
        console.log('DADA');
        setUser(user.uid);
        setUserLogged(user ? true : false);
      }
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {userLogged == false ? <AuthStack /> : <Navigation />}
    </NavigationContainer>
  );
};
export default Routes;
