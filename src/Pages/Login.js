import React, {useState} from 'react';
import {SafeAreaView, View, Image, Alert, KeyboardAvoidingView,ScrollView} from 'react-native';
import {Input, Button} from '../components';
import {authStyles} from './styles';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

export const Login = (props) => {


  function Login(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.Alert(
            'WELCOME MY_TRIVIA',
            'That email address is already in use!',
          );
        }
        if (error.code === 'auth/ınvalıd-emaıl') {
          Alert.alert('WELCOME MY_TRIVIA', 'That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('WELCOME MY_TRIVIA', 'User not found. Sign up Please..');
        }
        console.error(error.code);
      });
  }
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'gray'}}>
        <ScrollView style={{flex: 1}}>
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
            <Button title="Login" onPress={() => Login(email,password)} />
            <Button
              title="Sign up"
              onPress={() => props.navigation.navigate('Sign')}
              noBorder
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
