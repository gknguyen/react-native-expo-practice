import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={props.onIncrease} />
      <Button title={`Decrease ${props.color}`} onPress={props.onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
