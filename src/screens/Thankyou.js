import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Thankyou = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.thankuText}>Thankyou</Text>
    </View>
  );
};

export default Thankyou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankuText: {
    fontSize: 45,
    color: 'blue',
  },
});
