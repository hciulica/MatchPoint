import React, {useState} from 'react';
import { Text,TextInput,StyleSheet,View, Button,TouchableOpacity,Switch} from 'react-native';
import Input from '../components/Input';
import ButtonAuthentication from '../components/ButtonAuthentication';
import TextButton from '../components/TextButton';
import Feather from 'react-native-vector-icons/Feather';
import { auth } from '../api/firebase/';
import { } from 'firebase/auth'

var {Platform} = React;

const RegisterScreen = ({navigation, iconshow}) => {

  const [isSecureEntry, setIsSecureEntry] = useState(true);  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleSignUp = () => {
    console.log("Email:",email);
    console.log("Password:", password);

    auth
    .createUserWithEmailAndPassword(email.trim(), password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }
  return (
    <View style = {styles.iosRegisterPart}> 
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.subText}>Create your account</Text>
        <Input title="YOUR NAME" placeholder={'Password'} passwordfield={false} />
                      <View>
                    <Text style={styles.text}>EMAIL</Text>
                    <View style = { styles.backgroundStyle}>
                        <TextInput
                          style={styles.inputStyle}
                          placeholderTextColor={'darkgray'}
                          secureTextEntry={false}
                          autoCapitalize="none"
                          autoCorrect={false}
                          value = {email}
                          onChangeText={newValue => setEmail(newValue)}
                          iconshow = {true}
                        />

                    </View>      
                        </View>

                        <View>
                    <Text style={styles.text}>PASSWORD</Text>
                    <View style = {styles.backgroundStyle}>
                        <TextInput
                          style={styles.inputStyle}
                          placeholderTextColor={'darkgray'}
                          secureTextEntry={isSecureEntry}
                          autoCapitalize="none"
                          autoCorrect={false}
                          value = {password}
                          onChangeText={newValue => setPassword(newValue)}
                          
                        />

                        <TouchableOpacity onPress = {()=>{
                          setIsSecureEntry((prev) => !prev)            
                        }}
                        >
                        <View>
                          {
                            isSecureEntry ?
                              <Feather name = "eye-off" style = {styles.showeye}/>
                              :
                              <Feather name = "eye" style = {styles.showeye}/>
                          }
                          </View>
                        </TouchableOpacity>
                    </View>      
                        </View>
            <View>
            
        </View>
        <Input title="CONFIRM PASSWORD" placeholder={'Password'} iconshow={false}>
        </Input> 
        
        <ButtonAuthentication title={'Register'} onPress={handleSignUp} />
        <TextButton
            containerStyle={styles.registerContainer}
            textStyle={styles.registerText}
            title={"I have an account"}
            onPress={() => navigation.navigate('Login')}
        />
    </View>
  );
  
};
const styles = StyleSheet.create({
  //
  backgroundStyle:{
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  text: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 3,
    color: '#A09C9C',
    fontSize: 13,
  },
  inputStyle: {
    flex : 1,
    fontSize: 18,
    color: 'black',
    marginHorizontal: 13
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
    flexDirection: 'row',

  },
  showeye:{
    fontSize: 30,
        alignSelf:'center',
        marginHorizontal: 15,
        marginVertical: 10
  },

  //
  iosRegisterPart:{
    marginTop: (Platform.OS === 'ios') ? 50 : null
  },
   passwordShow: {
        fontSize: 30,
        paddingLeft: 320,
        borderColor: 'red',
        marginRight: 0,
        marginHorizontal: -300
   },
  //Login Header
  loginText: {
    marginHorizontal: 20,
    fontSize: 22,
    color: '#424242',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7,
  },
  subText: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#979797',
    marginBottom: 30,
  },

  //textButton styles
  forgotPasswordContainer: {
    marginTop: -18,
    marginRight: 20,
  },

  forgotPasswordText: {
    color: '#A09C9C',
    marginTop: 0,
    fontSize: 15,
    fontWeight: '500',
  },

  registerContainer: {
    marginTop: 30,
  },

  registerText: {
    fontSize: 17,
    fontWeight: '400',
  },

  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RegisterScreen;
