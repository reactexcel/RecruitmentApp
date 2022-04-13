import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
const MinutesToMillis = min => min * 1000 * 60;
const Timer = ({navigation, isPaused}) => {
  //   console.log(isPaused, '------->');
  const [millis, setMillis] = useState(MinutesToMillis(Minute));
  // const [isPaused, setPaused] = useState(true);
  const interval = useRef(null);
  const Minute = 0.1;
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const second = Math.floor(millis / 1000) % 60;
  useEffect(() => {
    setMillis(MinutesToMillis(Minute));
  }, [Minute]);
  const countdown = () => {
    setMillis(prevtime => {
      if (prevtime === 0) {
        clearInterval(interval.current);
        navigation.navigate('Thankyou');
        return prevtime;
      }
      const temiLeft = prevtime - 1000;
      return temiLeft;
    });
  };
  useEffect(() => {
    if (isPaused) {
      setMillis(0);
    }
    interval.current = setInterval(countdown, 1000);
  }, [isPaused]);
  const formatTime = time => (time < 10 ? `0${time}` : time);
  return (
    <View style={styles.container}>
      <Text style={styles.TimerStyle}>
        {formatTime(minute)}:{formatTime(second)}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  TimerStyle: {
    fontSize: 35,
    color: 'red',
  },
  container: {
    position: 'absolute',
    // top: 3,
    right: 3,
  },
});
