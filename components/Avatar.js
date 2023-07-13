import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
const Avatarcontainer = ({item}) => {
  const {name, image} = item;
  // console.log(item);
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 18,
      }}>
      <Avatar.Image size={100} source={{uri: image.medium}} />
      <Text> {name.full}</Text>
    </View>
  );
};

export default Avatarcontainer;

const styles = StyleSheet.create({});
