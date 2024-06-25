import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, value) => {
  return { ...state, counter: state.counter + value };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button title="increase" onPress={() => dispatch(1)}></Button>
      <Button title="Decrease" onPress={() => dispatch(-1)}></Button>
      <Text>Current count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
