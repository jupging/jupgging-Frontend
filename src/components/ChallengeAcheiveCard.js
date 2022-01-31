import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native'
import Layout from "../constants/Layout";

const Container = styled.View`
justify-content : center;
align-items : center;
background-color: white;
margin-vertical: 10px;
border-radius: 5px;

`

const ContentContainer=styled.View`
width: ${Layout.window.width-30}px;
marginLeft: 10px;
`
const ChallengeName=styled.Text`
font-size: 20px;
margin-vertical : 10px;
font-weight: bold;
`

const AcheivedDate =styled.Text`
font-size: 10px;
color : gray;
`

const Condition =styled.Text`
font-size: 15px;
color : black;
`
function ChallengeAcheiveCard({name,date,condition,badge}) {

  return <Container>
<ContentContainer>
  <ChallengeName>{name}</ChallengeName>
  <Condition>{condition}</Condition>
  <AcheivedDate>{date}</AcheivedDate>
  
</ContentContainer>
<Image source={badge} style={{width:50,height:50,alignSelf:'flex-end'}} />
  </Container>
}

export default ChallengeAcheiveCard;
