import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Login';
import Home from '../Home';
const Stack = createStackNavigator();

function MyScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MyScreens;
