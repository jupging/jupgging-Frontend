import React from 'react';
import { View, Button, StyleSheet, TouchableWithoutFeedback, Text,Image } from "react-native";
import styled from 'styled-components/native'
import Icon from '../images/Icon';
import Layout from '../constants/Layout';
const ButtonContainer = styled.TouchableOpacity.attrs(({onPress})=>{onPress:onPress})`
elevation: 8;
background-color: ${({bgColor})=>bgColor};
border-radius: 5px;
padding-vertical: 10px;
padding-horizontal: 12px;
flex-direction : row;
margin:auto;
shadowColor: #000000;
shadowOpacity:100;
shadowRadius: 10px;

`
const ButtonText = styled.Text`
fontSize: 18px;
color: ${({txtColor})=>txtColor};
font-weight: bold;
align-self: center;
margin-left : 10px;
`;

const MyButton = ({ onPress, title,bgColor,txtColor,type }) => {


    return(
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        {type?<Image source={Icon.GoogleIcon} style={{width:30,height:30}}/>:null}
      <ButtonText txtColor={txtColor}>{title}</ButtonText>
    </ButtonContainer>
    )
};


  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
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
