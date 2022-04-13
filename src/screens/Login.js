import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const LoginAuth = () => {
    if (email == '0007') {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
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
