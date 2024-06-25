import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'GK Nguyen';

  return (
    <View>
      <Text style={styles.headerText}>Getting started with react native!</Text>
      <Text style={styles.subHeaderText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
  },
  subHeaderText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
