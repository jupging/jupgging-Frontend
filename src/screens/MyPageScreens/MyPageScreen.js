import React from "react";
import { Image,View,ScrollView} from "react-native";
import styled from 'styled-components/native'
import ProfileAvatar from "../../components/ProfileAvatar";
import {Button} from 'native-base';
import ChallengeAcheiveCard from "../../components/ChallengeAcheiveCard";
import ChallengeList from "../../constants/ChallengeList";
import LevelCard from "../../components/LevelCard";

const Container = styled.View`
flex : 1;
justify-content : flex-start;
align-items : center;

`

const SubContainer = styled.View`

width:100%;
justify-content : flex-start;
align-items : center;
background-color:white;
border-bottom-color : #dddddd;
border-bottom-width : 1px;
border-top-color : #dddddd;
border-top-width : 1px;
`
const StyledText = styled.Text`
font-size : 20px;
margin : 10px;
`;

const LevelText = styled.Text`
font-size : 15px;
margin : 10px;
`;
const Line =styled.Text`
width : 100%;
border-bottom-color : #dddddd;
border-bottom-width : 1px;
`



const MyPageScreen = ({navigation})=>{

    const userID=undefined;
    //const times=13; //플로깅 횟수

    const times = [0,5,10,15,30,70,150];
    return( <Container> 
        <ScrollView>
        <SubContainer>
        <ProfileAvatar/>
        <StyledText>{userID?userID:'GUEST'}</StyledText>

        <Button  size={'md'} variant='solid' >
            프로필 편집
          </Button>
          <Line/>
        </SubContainer>
 
        <StyledText>플로깅 레벨
          </StyledText>
      {times.map((times)=> <LevelCard key={times} times={times}  /*Level 카드로 몇번 뛰었는지 전달*//>)}

          <StyledText>챌린지
          </StyledText>
          {ChallengeList.map
          ((challenge)=><ChallengeAcheiveCard key={challenge.name} name={challenge.name} date="2022.02.01" condition={challenge.condition} badge={challenge.imageSrc}/>)}
          

          <StyledText>러닝기록
          </StyledText>
          </ScrollView>
        </Container>
    )
}

export default MyPageScreen;