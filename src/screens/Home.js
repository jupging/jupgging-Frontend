import React from 'react';
import styled from 'styled-components/native'
import MyButton from '../components/MyButton';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
align-items : center;
padding-top: ${({insets:{top}})=>top}px;
padding-bottom: ${({insets:{bottom}})=>bottom}px;
padding-right: ${({insets:{right}})=>right}px;
padding-left: ${({insets:{left}})=>left}px;
`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const Home = ({navigation})=>{

    let insets = useSafeAreaInsets();
    return <Container insets={insets}>
        <StyledText>Home</StyledText>
        <MyButton title="List" onPress={()=>navigation.navigate('List')}/>
        </Container>
}

export default Home;