import React from "react";
import styled from 'styled-components/native'
import ProfileAvatar from "./ProfileAvatar";
import Theme from "../styles/Theme";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
flex-direction:row;
justify-content : flex-start;
align-items : center;
background-color:${({bgColor})=>bgColor};
width:100%;
align-self:center;
margin-top:10px;
padding:5px;
`

const StyledText = styled.Text`
font-size : 15px;
margin : 10px;
margin-left:20px;
font-weight:bold;
color: ${({txtColor})=>txtColor};
`;

const TimeText = styled.Text`
font-size : 15px;
margin : 10px;
color:${({txtColor})=>txtColor?txtColor:Theme.subColor};
margin-left:auto;
`;


function RankingCard({rank,nickname,times,imageUrl,bgColor,txtColor}) { // 순위,닉네임,횟수


  return (
    <TouchableOpacity>
    <Container bgColor={bgColor}>
        <StyledText txtColor={txtColor}>{rank}</StyledText>
      <ProfileAvatar size={'md'} url={imageUrl}/>

      <StyledText txtColor={txtColor}>{nickname}</StyledText>
      <TimeText txtColor={txtColor}> {times}회</TimeText>
    </Container>
    </TouchableOpacity>);
}

export default RankingCard;
