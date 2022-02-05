import React from "react";
import styled from 'styled-components/native'
import {Button,Image} from 'react-native';
import LottieView from "lottie-react-native";
import { useFonts } from 'expo-font';
import Theme from "../../styles/Theme";
import Icon from "../../images/Icon";
import MyButton from "../../components/MyButton";
const Container = styled.View`
flex : 1;
justify-content : flex-end;
align-items : center;
background-color:white;
`
//68894-running
const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
font-family:NanumSquareR;
`;
const Large = styled.Text`
font-size : 100px;
margin : 10px;
font-family:NanumSquareR;
`;


const SubText  = styled.Text`
font-size : 15px;
margin-vertical : 10px;
color: gray;
font-family : NanumSquareR;
text-align:center;
`;

const HighLight =styled.Text`
font-size : 30px;

color:${ Theme.mintColor};
`;

const TutorialScreen = ({navigation})=>{
    const [loaded] = useFonts({ NanumSquareR: require('../../../assets/font/NanumSquareR.ttf') });
    if(!loaded)
    return null;

    return (<Container>
        
        <StyledText><HighLight>플로깅(Plogging)</HighLight>이란?</StyledText>
 
        <SubText> 이삭을 줍는다는 뜻의 스웨덴어 ‘Plocka upp’과 {'\n'}달리는 운동을 뜻하는 영어 ‘Jogging’의 합성어를 뜻해요!</SubText>
        <SubText> 즉, 러깅하면서 쓰레기를 줍는것이에요!</SubText>
        {/* <LottieView 
            style={{width:200,height:200,alignSelf:'center'}} 
            source={require('../../../assets/lottie/68894-running.json')}
            autoPlay
            loop
           /> */}
       
        <MyButton onPress={()=>navigation.navigate('Home')} title="플로깅시작하기" bgColor={Theme.subColor} txtColor={'white'}/>

        <Image source={Icon.RunningTrack} style={{width:400,height:400,marginTop:50}}/>
        </Container>)
}

export default  TutorialScreen;