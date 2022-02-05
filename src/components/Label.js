import React from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components/native'


const Container = styled.View`
justify-content: flex-start;
align-items:center;
background-color: white;
margin:10px;
border-radius:10px;
border-width : 1px;
border-color:gray;
padding :15px;
`
const StyledText = styled.Text`
font-size : 20px;
font-weight : bold;
`;

function Label({name,value}) {
  return <Container >
      <StyledText>{name}</StyledText>
      <Text>{value}</Text>

      </Container>;
}

export default Label;
