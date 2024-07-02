import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1} />
      <View style={styles.textStyle2} />
      <View style={styles.textStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle1: {
    height: 100,
    width: 100,
    top: 100,
    backgroundColor: 'red',
  },
  textStyle2: {
    height: 100,
    width: 100,
    top: 200,
    backgroundColor: 'green',
  },
  textStyle3: {
    height: 100,
    width: 100,
    top: 100,
    backgroundColor: 'purple',
  },
});

export default BoxScreen;
