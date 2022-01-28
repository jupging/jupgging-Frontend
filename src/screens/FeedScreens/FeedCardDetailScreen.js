import React from 'react';
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

function FeedCardDetailScreen({route,navigation}) {
  return <Container><StyledText>FeedCardDetailScreen</StyledText></Container>;
}

export default FeedCardDetailScreen;
