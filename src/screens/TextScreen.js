import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        onChangeText={setPass}
      />
      {pass.length <= 5 ? (
        <Text style={styles.passErrorMess}>Password must be longer than 5 charaters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  passErrorMess: {
    color: 'red',
  },
});

export default TextScreen;
