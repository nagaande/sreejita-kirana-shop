import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import api from '../api/api';

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const res = await api.signIn(username, password);
      // save token, then navigate
      navigation.replace('Customers');
    } catch (e) {
      setError('Invalid credentials');
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}