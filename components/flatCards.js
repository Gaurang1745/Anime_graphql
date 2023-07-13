import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Anime from './Anime';

const flatCards = ({data, navigation}) => {
  return (
    <View>
      <View style={styles.Container}>
        {data.map((item, id) => {
          return <Anime key={id} item={item} navigation={navigation} />;
        })}
      </View>
    </View>
  );
};

export default flatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  Container: {},
});
