import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Thankyou = props => {
  console.log(props, 'Props thank you');
  const {correct, total, status} = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.thankuText}>Thankyou</Text>
      <View style={styles.resultContainer}>
        {status == 'Pass' ? (
          <Text style={styles.Status}>{status} 💃💃💃</Text>
        ) : (
          <Text style={styles.Status}>{status} 😭😭😭</Text>
        )}
        <Text style={styles.score}>
          your scroe is {correct}/{total}
        </Text>
      </View>
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
  resultContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 50,
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 20,
  },
  thankuText: {
    fontSize: 60,
    color: 'blue',
  },
  Status: {
    fontSize: 25,
    color: '#fff',
  },
  score: {
    fontSize: 25,
    color: '#fff',
  },
});
