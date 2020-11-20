import React from 'react';
import {View, Text, Alert} from 'react-native';
import {headerStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = (props) => {
  return (
    <View style={headerStyles.container}>
      <View style = {headerStyles.text.container}>
        <Text style={headerStyles.text}> # {props.header} </Text>
      </View>
      <View style = {headerStyles.iconContainer}>
        <Icon 
          name = 'selection-multiple'
          size = {40}
          color = '#9c4dcc'
          onPress = {props.onChannelSelect}
        />
        <Icon 
          name = 'logout'
          size = {40}
          color = '#9c4dcc'
          onPress = {props.signOut}
        />
      </View>
    </View>
  );
};
