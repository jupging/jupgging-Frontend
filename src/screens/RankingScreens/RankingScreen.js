import React from "react";
import styled from 'styled-components/native'
import Podium from '../../components/Podium'

const Container = styled.View`
flex : 1;



`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
font-weight: bold;
text-align : center;
`;

const RankingScreen = ({navigation})=>{

    return <Container>
        <StyledText>내가 바로 지구 지킴이🌍</StyledText>
        <Podium/>
        </Container>
}

export default RankingScreen;