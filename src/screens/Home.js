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
      <View style={styles.container}>
        <FlatList
          // style={{flex: 0.5}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => {
            return <Questions />;
          }}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            setIsPaused(!isPaused);
            // navigation.navigate('Thankyou');
          }}>
          <Text style={styles.submitBtnText}>Submit Test</Text>
        </TouchableOpacity>
      </View>
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
