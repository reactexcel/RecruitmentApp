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
import apiData from '../components/Json';

const Home = ({navigation}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [Data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const generateData = recdata => {
    if (recdata) {
      const index = Data?.findIndex(item => {
        return item?.id == recdata?.id;
      });

      if (index != -1) {
        Data.splice(index, 1, recdata);
        setData([...Data]);
      } else {
        setData([...Data, recdata]);
      }
    }
  };
  const getResult = () => {
    let x = 0;
    let status = '';
    apiData.forEach(item => {
      Data.forEach(userItem => {
        if (item.id === userItem.id) {
          if (item.answer === userItem.option) {
            x++;
          }
        }
      });
    });
    if (x < 5) {
      status = 'Failed';
    } else {
      status = 'Pass';
    }
    navigation.navigate('Thankyou', {
      correct: x,
      total: apiData.length - 1,
      status: status,
    });
  };
  console.log(result, 'resulted data');
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <Text style={styles.header}>Time Status Here </Text>
      <Timer navigation={navigation} isPaused={isPaused} />
      <ScrollView style={styles.container}>
        {apiData.map((item, i) => (
          <Questions generateData={generateData} key={i} item={item} />
        ))}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            // setIsPaused(true);
            getResult();
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
    marginBottom: 5,
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
