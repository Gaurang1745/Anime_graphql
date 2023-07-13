/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import React from 'react';
import { LogBox } from 'react-native'
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { ActivityIndicator, MD3DarkTheme,
  MD3LightTheme, } from 'react-native-paper';
import client from './apolloClient';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animedetail from "./components/Animedetail.js"

import MyComponent from './components/MyComponent';


const Stack = createNativeStackNavigator();
const App=()=>{
  const colorScheme = useColorScheme();
  const paperTheme =
  colorScheme === 'dark'
    ? { ...MD3DarkTheme }
    : { ...MD3LightTheme };
 

    React.useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])
  
    
  return (
   
    <ApolloProvider client={client}>
      <PaperProvider  theme={paperTheme} >
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="AnimeMAX"   component={MyComponent}  />
      <Stack.Screen name="AnimeDetail" component={Animedetail} />
      </Stack.Navigator>
    </NavigationContainer>
   
    </PaperProvider>
  </ApolloProvider>
  
  )
}

export default App;