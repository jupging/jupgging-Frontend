import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';

const Container = styled.View`

justify-content : center;
align-items : center;
flex-direction: row;
background-color: white;
border-radius:10;
overflow: scroll;
margin-vertical:10px;
margin-horizontal:20px;
height : 100px;
`

const Title= styled.Text`

font-weight : bold;
font-size : 15;
margin-vertical: 10;

`

const Content =styled.Text.attrs({
    includeFontPadding: false
})`
color: gray
max-height : 50px;
`

export default function RecordCard({item}) {
      const {thumbnail,id,year,month,day,week,kilometer,kcal,time}=item;
    return <Container>
        <Image style={styles.image} source={{  uri: thumbnail}}/>
   
        <View style={styles.conntentContainer}>
        <TouchableOpacity>
        <Title>{year}.{month}.{day}, {week}</Title>
        
        <Content >{kilometer}킬로미터, {kcal}kcal, {time}초</Content>
        </TouchableOpacity>
        </View>
    </Container>
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