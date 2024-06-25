import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend 1', age: 20 },
    { name: 'friend 2', age: 45 },
    { name: 'friend 3', age: 32 },
    { name: 'friend 4', age: 27 },
    { name: 'friend 5', age: 53 },
    { name: 'friend 7', age: 30 },
  ];

  return (
    <FlatList
      keyExtractor={(_, index) => index}
      data={friends}
      renderItem={(element) => (
        <Text style={styles.text}>
          {element.item.name} - Age {element.item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    fontSize: 20,
  },
});

export default ListScreen;
