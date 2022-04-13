import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Options = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle}></TouchableOpacity>
      <Text style={styles.optionText}>PROGRAMING LAGUAGE </Text>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 10,
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
