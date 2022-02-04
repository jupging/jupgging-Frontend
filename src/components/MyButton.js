import React from 'react';
import { View, Button, StyleSheet, TouchableWithoutFeedback, Text,Image } from "react-native";
import styled from 'styled-components/native'
import Icon from '../images/Icon';
import Layout from '../constants/Layout';
const ButtonContainer = styled.TouchableOpacity.attrs(({onPress})=>{onPress:onPress})`
elevation: 8;
background-color: ${({bgColor})=>bgColor?bgColor:'white'};
border-radius: 5px;
padding-vertical: 10px;
padding-horizontal: 12px;
flex-direction : row;
margin:5px;
shadowColor: #000000;
shadowOpacity:100;
shadowRadius: 10px;

`
const ButtonText = styled.Text`
fontSize: 18px;
color: ${({txtColor})=>txtColor?txtColor:'white'};
font-weight: bold;
align-self: center;
margin-left : auto;
`;

const MyButton = ({ onPress, title,bgColor,txtColor,type }) => {

let logo=null;
  if(type ==='google')
  logo=<Image source={Icon.GoogleIcon} style={{width:30,height:30}}/>
  else if (type ==='kakao')
  logo=<Image source={Icon.KaKaoIcon} style={{width:30,height:30}}/>



    return(
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        {logo}
      <ButtonText txtColor={txtColor}>{title}</ButtonText>
    </ButtonContainer>
    )
};


  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {

      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: 'gray',
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
export default MyButton;
