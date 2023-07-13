import { View, Text, SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import React from 'react';
import FlatCards from './flatCards';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { ActivityIndicator, MD3DarkTheme,
  MD3LightTheme, } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

const MyComponent = ({navigation} ) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const GET_DATA = gql`
  query GetMedia($search: String) {
    Page {
      media(search: $search) {
        siteUrl
        title {
          english
          native
        }
        averageScore
        description
        coverImage {
          large
        },id
      }
    }
  }
  `;
  const onChangeSearch = query => setSearchQuery(query);
    const theme = useTheme();
    const { loading, error, data } = useQuery(GET_DATA,{variables: {search: searchQuery!=''?`${searchQuery}`:'naruto'}});
    if (loading) { 
    return  (<View style={styles.container}> 
      <ActivityIndicator animating={true} color={theme.colors.secondary} size='large' />
      </View>)
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
  
  
    return (
    
      <SafeAreaView>
        <ScrollView  nestedScrollEnabled = {true} > 
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
       <FlatCards data={data.Page.media.slice(0,5)}  navigation={navigation}/>
        </ScrollView>
      </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
    }}
  );
  export default MyComponent;