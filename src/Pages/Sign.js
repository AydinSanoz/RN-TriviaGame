import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Input, Button} from '../components';
import {authStyles} from './styles';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export const Sign = () => {
  function SignUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('WELCOME MY-TRIVIA','That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('WELCOME MY-TRIVIA', 'That email address is invalid!');
        }

        console.error(error);
      });
  }
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const rePassword = useSelector((state) => state.rePassword);
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor :'gray'}}>
      <ScrollView style = {{flex:1}}>

        <View style={authStyles.container}>
          <Image
            source={require('../assets/logo.jpeg')}
            style={authStyles.logo}
          />
          <Input
            text="Enter your email"
            onText={(e) => dispatch({type: 'SET-EMAIL', payload: e})}
          />
          <Input
            text="Enter your password"
            onText={(p) => dispatch({type: 'SET-PASSWORD', payload: p})}
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
