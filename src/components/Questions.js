import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Options from './Options';

const Questions = ({item, generateData}) => {
  const [selectedOption, setSelectedOption] = useState();
  // console.log(item);
  useEffect(() => {
    generateData(selectedOption);
  }, [selectedOption]);

  return (
    <View style={{marginVertical: 10, flex: 1}}>
      <Text style={styles.QuestionStyle}>Question : {item.question}</Text>
      {item.options.map(option => (
        <View style={styles.container}>
          <TouchableOpacity
            style={
              selectedOption?.option === option
                ? styles.btnStyleTrue
                : styles.btnStyle
            }
            // onPress={() => {
            //   setSelectedOption({option: option, id: item.id})
            //     generateData(selectedOption);
            // }}
            onPress={() => {
              setSelectedOption({option: option, id: item.id});
            }}></TouchableOpacity>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  QuestionStyle: {
    fontSize: 17,
    color: '#000',
  },
  btnStyle: {
    borderWidth: 2,
    borderColor: '#ccc',
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  btnStyleTrue: {
    borderWidth: 2,
    borderColor: '#ccc',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 17,
    color: '#000',
    width: '70%',
    marginLeft: 10,
  },
});
