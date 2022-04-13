import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Timer from '../components/Timer';
import Questions from '../components/Questions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.header}>Time Status Here </Text>
      <Timer />
      <ScrollView style={styles.container}>
        <Questions />
        <Questions />
        <Questions />
        <Questions />
        <Questions />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('Thankyou')}>
          <Text style={styles.submitBtnText}>Submit Test</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    marginBottom: 40,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'blue',
    letterSpacing: 0.7,
  },
  submitBtn: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // width: 50,
  },
  submitBtnText: {
    fontSize: 16,
    color: '#fff',
  },
});
