import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Thankyou from '../screens/Thankyou';
const Stack = createStackNavigator();

function MyScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Thankyou" component={Thankyou} />
    </Stack.Navigator>
  );
}

export default MyScreens;
