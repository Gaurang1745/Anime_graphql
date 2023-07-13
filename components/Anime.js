import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button, Card, Modal, Portal, Text} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import Star from './Star';

const Anime = ({navigation, item}) => {
  const theme = useTheme();

  const showModal = id => {
    navigation.navigate('AnimeDetail', {id: id});
  };
  console.log(item.id);
  return (
    <View style={styles.card}>
      <Card mode="contained">
        <Card.Cover
          source={{uri: item.coverImage.large}}
          style={styles.cardImage}
        />
        <Card.Content>
          <Text variant="titleLarge">{item.title.english}</Text>
          <Text variant="titleSmall" style={styles.Container}>
            {' '}
            Rating:{parseFloat(item.averageScore) / 10}{' '}
            <Star stars={parseFloat(item.averageScore) / 20} />
          </Text>
          <Text variant="bodyMedium">
            {item.description.substring(0, 100)} ...
          </Text>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => showModal(item.id)}
              style={styles.cardFooter}>
              Detail
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Anime;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 2,
    marginTop: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  ModalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: 0,
    marginBottom: 0,
  },
  Rating: {},
  card: {
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 250,
    marginBottom: 8,
    borderRadius: 6,
  },
  cardBody: {
    flex: 1,
    paddingHorizozntal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
