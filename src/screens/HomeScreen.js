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
  FlatList,
} from 'react-native';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Feather from 'react-native-vector-icons/Feather';
import {withNavigation} from 'react-navigation';
import {AuthContext} from '../navigation/AuthProvider';
import Header from '../components/Header';
import UpcomingMatchCard from '../components/UpcomingMatchCard';
import NewMatchCard from '../components/NewMatchCard';
import {db} from '../api/firebase';
import {
  collection,
  getDoc,
  setDoc,
  doc,
  addDoc,
  getDocs,
} from 'firebase/firestore/lite';
import {firebase} from '@react-native-firebase/firestore';

var {Platform} = React;

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const {user, logout} = useContext(AuthContext);

  console.log(user);
  // const getData = async () => {
  //   const userCol = collection(db, 'users');
  //   const usersSnapshot = await getDocs(userCol);
  //   const userList = usersSnapshot.docs.map(doc => doc.data());

  //   console.log(userList);
  // };

  // getData();
  const setName = async id => {
    const userSnapshot = await getDoc(doc(db, 'users', id));
    if (userSnapshot.exists()) {
      const name = userSnapshot.data().name;
      setUserName(name);
    } else {
      console.log("User dosen't exist");
    }
  };
  useEffect(() => {
    setName(user);
  }, []);

  const [games, setGames] = useState([
    {
      userName: 'Klara Markovitz',
      level: 'Intermediar',
      profilePicture: require('../assets/profilePicture2.jpg'),
      location: 'Baza Sportiva Nr 2, Timisoara',
      date: '13 Dec, 13:00 pm',
      id: '1',
    },
    {
      userName: 'Klara Markovitz',
      level: 'Intermediar',
      profilePicture: require('../assets/profilePicture2.jpg'),
      location: 'Baza Sportiva Nr 2, Timisoara',
      date: '13 Dec, 13:00 pm',
      id: '2',
    },
    {
      userName: 'Klara Markovitz',
      level: 'Intermediar',
      profilePicture: require('../assets/profilePicture2.jpg'),
      location: 'Baza Sportiva Nr 2, Timisoara',
      date: '13 Dec, 13:00 pm',
      id: '3',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.greetingText}>Hi, {userName}</Text>
            {/* <Text style={styles.text}>{user}</Text> */}
            <UpcomingMatchCard />
            <View style={{marginTop: 20}}>
              <Text style={styles.upcomingMatchesText}>
                Let's find new matches
              </Text>
            </View>
          </>
        }
        nestedScrollEnabled={true}
        keyExtractor={item => item.id}
        data={games}
        renderItem={({item}) => (
          <NewMatchCard
            userName={item.userName}
            level={item.level}
            profilePicture={item.profilePicture}
            location={item.location}
            date={item.date}
          />
        )}
        ListFooterComponent={
          <>
            <View style={{marginTop: 70}}></View>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS === 'ios' ? 50 : null,
    marginLeft: Platform.OS === 'ios' ? 10 : null,
  },
  greetingText: {
    marginTop: 20,
    color: '#000000',
    fontWeight: '600',
    fontSize: 25,
  },
  upcomingMatchesText: {
    color: '#767676',
    fontSize: 17,
  },
});

export default HomeScreen;
