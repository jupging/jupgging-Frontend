import React from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components/native'


const Container = styled.View`
width : 100,
height: 100,
`
const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;


function Label({name,value}) {
  return <View>
      <Text>{name}</Text>
      <Text>{value}</Text>

      </View>;
}

export default Label;
