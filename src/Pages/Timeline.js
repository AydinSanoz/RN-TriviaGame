import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, PostInput} from '../components';
import {timelineStyles} from './styles';
import auth from '@react-native-firebase/auth';

export const Timeline = (props) => {
  const current = auth().currentUser
  console.log("Timeline -> current", current)
  current == null && props.navigation.navigate('Login')
  
  return (
    <SafeAreaView style={timelineStyles.container}>
      <Header signOut = {()=>auth().signOut()}/>
      <KeyboardAvoidingView style={timelineStyles.container}>
        <ScrollView style={timelineStyles.container}>
          <View style={timelineStyles.container}>
            <View style={timelineStyles.container}>
              <Text>Timeleine Page</Text>
            </View>
            <PostInput />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
