import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import CardNewsImages from '../images/CardNewsImage';
import Avatar from './ProfileAvatar';
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;
flex-direction: row;
background-color: white;
border-radius:10;
overflow: hidden;
margin-vertical:10;
margin-horizontal:20;
height : 100;
`

const Title= styled.Text`

font-weight : bold;
font-size : 20;
margin-vertical: 10;

`

const Content =styled.Text.attrs({
    includeFontPadding: false
})`
color: gray
max-height : 100;
`
function FlatCard({item}) {
    const {thumbnail,title,desc}=item;
  return <Container>
      <Image style={styles.image} source={{  uri: thumbnail}}/>
   
      <View style={styles.conntentContainer}> 
      <TouchableOpacity>
      <Title>{title}</Title>
     
      <Content >{desc}</Content>
      </TouchableOpacity>
      </View>
    
  </Container>;
}


const styles = StyleSheet.create({
    image:{
        flex : 0.35,
        height: '100%',
      
    },
    conntentContainer:{
        flex: 0.65,
        paddingHorizontal: 20,
        paddingVertical:20,
    
    }
});
export default FlatCard;
