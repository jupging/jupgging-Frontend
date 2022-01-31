import React from 'react';
import styled from 'styled-components/native'
import ProfileAvatar from "./ProfileAvatar";

const Container = styled.View`
flex : 1;
flex-direction : row;
justify-content : center;


`
const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

function Podium() {
  return <Container>
    <ProfileAvatar/>
    <ProfileAvatar/>
    <ProfileAvatar/>
  </Container>;
}

export default Podium;
