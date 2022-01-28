import React from "react";
import styled from 'styled-components/native'
import {View, Text, Card, Button} from 'react-native-ui-lib';
const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const PloggingScreen = ({navigation})=>{

    return <Container>
        <StyledText>PloggingScreen</StyledText>
        
        </Container>
}

export default PloggingScreen;