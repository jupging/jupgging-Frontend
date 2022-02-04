import React from 'react';
import styled from 'styled-components/native';
import dummy from "../db/record_data.json";
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

export default function RecordStatic() {
    const kilometerResult = dummy.reduce((acc_kil, cur_kil) => 
    acc_kil + cur_kil.kilometer, 0)
    const kcalResult = dummy.reduce((acc_kcal, cur_kcal) => 
    acc_kcal + cur_kcal.kcal, 0)
    const timeResult = dummy.reduce((acc_time, cur_time) => 
    acc_time + cur_time.time, 0)

    return <Container>
        <Title>{kilometerResult}km </Title>
        
        <Content >{kcalResult}kcal, {timeResult}초</Content>
    </Container>
}