import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Options from './Options';

const Questions = () => {
  return (
    <View style={{marginVertical: 10, flex: 1}}>
      <Text style={styles.QuestionStyle}>Question : what is javascript</Text>
      <Options />
      <Options />
      <Options />
      <Options />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  QuestionStyle: {
    fontSize: 17,
    color: '#000',
  },
});
