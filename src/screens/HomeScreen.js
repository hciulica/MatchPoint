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
import GeneralButton from '../components/GeneralButton';
import TextButton from '../components/TextButton';
import Feather from 'react-native-vector-icons/Feather';
import {withNavigation} from 'react-navigation';
import {AuthContext} from '../navigation/AuthProvider';
import Header from '../components/Header';
import UpcomingMatchCard from '../components/UpcomingMatchCard';
import NewMatchCard from '../components/NewMatchCard';
import DatePicker from 'react-native-date-picker';
import {db} from '../api/firebase';
import {
  collection,
  getDoc,
  setDoc,
  doc,
  addDoc,
  getDocs,
  where,
  query,
  toDate,
  orderBy,
} from 'firebase/firestore/lite';
import {firebase} from '@react-native-firebase/firestore';

var {Platform} = React;

const HomeScreen = ({navigation}) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [email, setEmail] = useState('');
  const [games, setGames] = useState(null);
  const {user, logout, userName, setUserName, userLevel, setUserLevel} =
    useContext(AuthContext);

  //get games
  const fetchGames = async () => {
    const list = [];
    const q = query(collection(db, 'games'), where('level', '==', userLevel));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const {userUid, userName, level, date} = doc.data();
      const date2 = date ? date.toDate() : null;
      if (userUid != user) {
        //don't display matches posted by the current user
        list.push({
          id: doc.id,
          userName,
          date:
            date2.getDate() +
            ' ' +
            monthNames[date2.getMonth()].substring(0, 3) +
            ' ' +
            date2.getFullYear() +
            ', ' +
            date2.getHours() +
            ':' +
            date2.getMinutes(),
          level,
          profilePicture: require('../assets/profilePicture2.jpg'),
          location: 'Baza Sportiva Nr 2, Timisoara',
        });
      }
    });
    setGames(list);
  };
  const setName = async id => {
    const userSnapshot = await getDoc(doc(db, 'users', id));
    if (userSnapshot.exists()) {
      const name = userSnapshot.data().name;
      await setUserName(name);
      await setUserLevel(userSnapshot.data().level);
    } else {
      console.log("User dosen't exist");
    }
  };
  useEffect(() => {
    async function fetchMyData() {
      setName(user);
      fetchGames();
      console.log(user);
    }
    fetchMyData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.greetingText}>Hi, {userName}</Text>
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
