import React from 'react';
import {Button, Card} from 'react-native-paper';
import {StyleSheet, View , Image,Text, ScrollView,Flat} from "react-native"
import { useTheme } from 'react-native-paper';
import Star from './Star';
import Avatar from './Avatar';
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler';
const Animedisplay = ({item}) => {
    item = {...item.Media}
    const theme = useTheme();
  return (
 <View style={[{backgroundColor:theme.colors.background}]} >
<Image
        source={{ uri: (item.coverImage.extraLarge) }}
        style={styles.image}
      />
<View style={styles.container}>
      <Text style={{...theme.fonts.headlineMedium, color:theme.colors.secondary}}>{item.title.english} </Text>
      <Text  style={{color:theme.colors.secondary,   textAlign: 'center', width:"80%"}  }> <Text style={{paddingRight:10,}} >Rating:{(parseFloat(item.averageScore)/10)}</Text>   <Star  stars={(parseFloat(item.averageScore)/20)}/> </Text>
      <Text  style={{color:theme.colors.tertiary}} >{item.description} </Text>
      </View>
<Text style={{...theme.fonts.headlineSmall}}> Characters </Text>
<View styles={styles.Char}> 

{item.characters.nodes.map((item,idx) =>{
   return  ( <Avatar key={idx} item={item}></Avatar>)
})}

</View> 
 </View>
)
}

export default Animedisplay

const styles = StyleSheet.create({
  Char:{
    
      //  flex: 1,
      // flexDirection:"row",
    marginTop: 30,
    
  },
container:{
  flex: 0,
  justifyContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
},
image:{
marginTop:10,
height:300,
width:"auto",
borderRadius:50,
},
})