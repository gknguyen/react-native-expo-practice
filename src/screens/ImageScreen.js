import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import ForestImg from '../../assets/forest.jpg';
import BeachImg from '../../assets/beach.jpg';
import MountainImg from '../../assets/mountain.jpg';

const ImageScreen = () => {
  return (
    <View>
      {[
        {
          title: 'Forest',
          image: ForestImg,
          score: Math.round(Math.random() * 10),
        },
        {
          title: 'Beach',
          image: BeachImg,
          score: Math.round(Math.random() * 10),
        },
        {
          title: 'Mountain',
          image: MountainImg,
          score: Math.round(Math.random() * 10),
        },
      ].map((element, index) => (
        <ImageDetail
          key={index}
          title={element.title}
          image={element.image}
          score={element.score}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
