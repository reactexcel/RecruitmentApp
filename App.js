import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyScreens from './src/navigations/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <MyScreens />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
