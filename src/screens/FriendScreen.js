import React from "react";
import styled from 'styled-components/native'

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const FriendScreen = ({navigation})=>{

    return <Container>
        <StyledText>FriendScreen</StyledText>
        
        </Container>
}

export default FriendScreen;