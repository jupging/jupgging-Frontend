import React from 'react';
import MyCarousel from '../../components/MyCarousel';
import styled from 'styled-components/native'
import CardNews from '../../components/CardNews';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;
function FeedScreen({route,navigation}) {

  return (<Container>
    <StyledText>FeedScreen</StyledText>
    
        </Container>);
}

export default FeedScreen;
