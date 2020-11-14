import React from 'react';
import {View, Text, Alert} from 'react-native';
import {headerStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = (props) => {
  return (
    <View style={headerStyles.container}>
      <View>
        <Text style = {headerStyles.text}> # Header Page </Text>
      </View>
      <View style = {headerStyles.iconContainer}>
        <Icon 
          name = 'selection-multiple'
          size = {40}
          color = '#9c4dcc'
          onPress = {()=>alert('pressed')}
        />
        <Icon 
          name = 'logout'
          size = {40}
          color = '#9c4dcc'
          onPress = {()=>alert('pressed')}
        />
      </View>
    </View>
  );
};
