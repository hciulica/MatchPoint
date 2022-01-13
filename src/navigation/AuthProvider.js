import React, {useState, createContext} from 'react';
import {authentication} from '../api/firebase';
import {db} from '../api/firebase';
import {
  createUserWithEmailAndPassword,
  setPersistence,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
} from 'firebase/firestore/lite';
import useAuthentication from '../hooks/useAuthentication';
import {} from 'firebase/auth';

const setUserFirestore = (usernamefirestore, uidfirestore, level) => {
  setDoc(doc(db, 'users', uidfirestore), {
    name: usernamefirestore,
    uid: uidfirestore,
    level: level,
  });
};
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLevel, setUserLevel] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        userLevel,
        setUserLevel,
        handleLogin: (email, password) => {
          signInWithEmailAndPassword(authentication, email.trim(), password)
            .then(re => {
              console.log(re);
            })
            .catch(error => alert(error.message));
        },
        handleSignUp: (email, password, username, cpassword, level) => {
          if (password !== cpassword) {
            alert('Passwords do not match.');
          } else {
            createUserWithEmailAndPassword(
              authentication,
              email.trim(),
              password,
            )
              .then(re => {
                console.log(re);
                const user = re.user;
                setUserName(username);
                setUserLevel(level);
                setUserFirestore(username, user.uid, level);
              })
              .catch((error, re) => {
                alert(error.message);
                console.log(re);
              });
          }
        },
        logout: async () => {
          try {
            await authentication.signOut();
            console.log('User loged out!');
            console.log(user);
          } catch (err) {
            alert(err.message);
          }
        },
        handleForgotPassword: email => {
          sendPasswordResetEmail(authentication, email.trim())
            .then(() => {
              alert('Reset email has been sent to ' + email);
            })
            .catch(error => alert(error.message));
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
