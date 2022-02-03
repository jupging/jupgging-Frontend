import React from "react";
import styled from 'styled-components/native'
import {Button} from 'react-native';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const TutorialScreen = ({navigation})=>{

    return <Container>
        <StyledText> TutorialScreen</StyledText>
        <Button onPress={()=>navigation.navigate('Home')}title="플로깅하러가기"></Button>
        </Container>
}

export default  TutorialScreen;