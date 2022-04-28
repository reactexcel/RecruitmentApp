import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import React, {useState,useRef, useEffect} from 'react';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const logAnim = useRef(new Animated.Value(0)).current;
  const LoginAuth = () => {
    if (email == '0007') {
      navigation.navigate('Home');
    }
  };
  useEffect(() =>{
    spin()
  } ,[])
  const spin = () => {
    logAnim.setValue(0)
    Animated.timing(
      logAnim,{
        toValue:1,
        duration:10000,
        easing: Easing.linear
      }
    ).start(() => {spin()})
  }

  
  const Ghum = logAnim.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','360deg']
  })
  return (
    <View style={styles.container}>
      <Animated.Image  
                    style={{ 
                      marginBottom:12, 
                        width: 227,  
                        height: 200,  
                        transform: [{rotate: Ghum}] }}  
                    source={require('../assests/unnamed.jpg')}  
                />  
      <TextInput
        placeholder="Enter your Email"
        style={styles.inputEmail}
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <TouchableOpacity style={styles.Btn} onPress={LoginAuth}>
        <Text style={styles.BtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputEmail: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 18,
  },
  Btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  BtnText: {
    fontSize: 18,
    color: '#fff',
  },
});
