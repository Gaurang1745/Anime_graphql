import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

const Star = ({stars}) => {
    const theme = useTheme();
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
  return (
  <Icon   key={index} style={ styles.Button}  size={20} name={stars >= index + 1 ? 'star' : stars >= number ? 'star-half-full' :'star-outline'} color={"gold"}/>
  )
    })
    return  <Text style={styles.Container}>{tempStars}</Text>
}

export default Star

const styles = StyleSheet.create({

    Container:
    {
        display:'flex',
       flexDirection:"row",
       justifyContent:"center",
       marginRight:50,
       textAlign: 'right',
        
    },
    Button:
    {
        
        marginTop:1,
        marginRight:1,
    }
})