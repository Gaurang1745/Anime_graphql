import React,{useState} from 'react';
import { Modal, Portal,  Button, PaperProvider,ActivityIndicator } from 'react-native-paper';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { useTheme } from 'react-native-paper';
import { View, Text, SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import Animedisplay from './Animedisplay';

const  Mymodal= ({route}) => {
  const {id} =route.params;
  
    const theme = useTheme();
const GET_DATA = gql`
query ExampleQuery($mediaId: Int) {
    Media(id: $mediaId) {
    
      characters {
        nodes {
          name {
            full
          }
          image {
            medium
          }
        }
      }
      coverImage {
        extraLarge

      }
      siteUrl
      
      title {
        english
        native
      }
      description
      id
      averageScore
    }
  }`;
  const { loading, error, data } = useQuery(GET_DATA, {variables: {mediaId: `${id}`}});


  if (loading) {
  return  (<View style={styles.container}> 
    <ActivityIndicator animating={true} color={theme.colors.secondary} size='large' />
    </View>)
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
console.log(data);
  return (
  
    
      <ScrollView    nestedScrollEnabled={true}  > 
     <Animedisplay item={data} />
      </ScrollView>
  
  )
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  }}
);
export default Mymodal;