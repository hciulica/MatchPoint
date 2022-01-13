import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const NewMatchCard = ({
  item,
  userName,
  level,
  profilePicture,
  location,
  date,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexView}>
        <Image
          source={profilePicture}
          resizeMode="contain"
          style={styles.profilePicture}
        />
        <View>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.level}>{level}</Text>
        </View>
        <Image
          source={require('../assets/message.png')}
          style={styles.messageicon}
        />
      </View>
      <View style={{...styles.flexView, marginTop: 23, alignItems: 'center'}} s>
        <Image
          source={require('../assets/locationPin.png')}
          resizeMode="contain"
          style={styles.locationPin}
        />
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.dateView}>
        <Image
          source={require('../assets/watch.png')}
          resizeMode="contain"
          style={styles.watchImage}
        />
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
  },
  upcomingMatchesText: {
    color: '#767676',
    fontSize: 17,
  },

  profilePicture: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 7,
  },

  flexView: {
    flexDirection: 'row',
  },

  name: {
    marginLeft: 8,
    fontSize: 17,
    fontWeight: '500',
    color: '#707070',
  },
  level: {
    marginTop: -2,
    color: '#B4B4B4',
    fontSize: 13,
    marginLeft: 8,
  },
  messageicon: {
    tintColor: '#B4B4B4',
    height: 30,
    width: 30,
    marginLeft: 'auto',
  },
  locationPin: {
    tintColor: '#B4B4B4',
    height: 15,
    width: 15,
  },
  location: {
    marginLeft: 8,
    fontSize: 14,
    color: '#B4B4B4',
  },
  dateView: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchImage: {
    tintColor: '#B4B4B4',
    height: 14,
    width: 14,
  },
  dateText: {
    marginLeft: 8,
    color: '#B4B4B4',
    fontSize: 14,
  },
});

export default NewMatchCard;
