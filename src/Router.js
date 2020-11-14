import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {initialStates, reducer} from './context';

import {Login, Sign, Timeline} from './Pages';

const Stack = createStackNavigator();
const store = createStore(reducer, initialStates);

const Router = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Timeline" screenOptions = {{headerShown : false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="Timeline" component={Timeline} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
