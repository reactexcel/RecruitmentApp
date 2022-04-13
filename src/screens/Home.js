import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Timer from '../components/Timer';
import Questions from '../components/Questions';

const Home = ({navigation}) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.header}>Time Status Here </Text>
      <Timer navigation={navigation} isPaused={isPaused} />
      <ScrollView style={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <Questions key={i} />
        ))}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            setIsPaused(true);
            navigation.navigate('Thankyou');
          }}>
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
    // marginBottom: 40,
    // paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'blue',
    letterSpacing: 0.7,
  },
  submitBtn: {
    backgroundColor: 'blue',
    padding: 10,
    // marginBottom: 5,
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
