import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return 0 <= state.red + action.amount && state.red + action.amount <= 255
        ? { ...state, red: state.red + action.amount }
        : state;
    case 'green':
      return 0 <= state.green + action.amount && state.green + action.amount <= 255
        ? { ...state, green: state.green + action.amount }
        : state;
    case 'blue':
      return 0 <= state.blue + action.amount && state.blue + action.amount <= 255
        ? { ...state, blue: state.blue + action.amount }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
      />

      <Text>
        rgb({state.red}, {state.green}, {state.blue})
      </Text>

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
