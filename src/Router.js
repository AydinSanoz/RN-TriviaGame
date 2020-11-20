import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {initialStates, reducer} from './context';
import auth from '@react-native-firebase/auth';

import {Login, Sign, Timeline} from './Pages';

const Stack = createStackNavigator();
const store = createStore(reducer, initialStates);

const Router = () => {
  const [hasSession, setSession] = useState(false);
  console.log("Router -> hasSession", hasSession)
  auth().onAuthStateChanged((user) => setSession(user));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {hasSession ? (
            <Stack.Screen name="Timeline" component={Timeline} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Sign" component={Sign} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
