import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import {Input, Button} from '../components';
import {authStyles} from './styles';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export const Sign = (props) => {
  function SignUp() {
    password !== rePassword 
      ? 
    (Alert.alert('WELCOME MY-TRIVIA', 'Passwords do not match'))
      :
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('Timeline')
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('WELCOME MY-TRIVIA','That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('WELCOME MY-TRIVIA', 'That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('WELCOME MY-TRIVIA', 'Weak Password');
        }
      });
  }
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const rePassword = useSelector((state) => state.rePassword);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor :'gray'}}>
      <KeyboardAvoidingView style={{flex: 1 }} behavior = {Platform.OS == 'ios' ? 'padding' : null}>
      <ScrollView style = {{flex:1}} bounces = {false} >

        <View style={authStyles.container}>
          <Image
            source={require('../assets/logo.jpeg')}
            style={authStyles.logo}
            
          />
          <Input
            text="Enter your email"
            onText={(e) => dispatch({type: 'SET-EMAIL', payload: e})}
            type = 'email-address'
          />
          <Input
            text="Enter your password"
            onText={(p) => dispatch({type: 'SET-PASSWORD', payload: p})}
            password
          />
          <Input
            text="Enter your password again"
            onText={(rp) => dispatch({type: 'SET-REPASSWORD', payload: rp})}
          />
          <Button 
            title="Sign up" 
            noBorder 
            onPress = {() =>{SignUp(email,password)}}
          />
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
