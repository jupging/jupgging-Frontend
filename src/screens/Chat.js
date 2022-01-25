import React,{useLayoutEffect} from "react";
import styled from 'styled-components/native'
import MyButton from '../components/MyButton';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const Chat = ({navigation,route})=>{
   useLayoutEffect (()=>{ // []를 추가해 처음 마운트 될때만 호출되도록 설정.
    console.log(navigation.setOptions({
        headerLeft : ({onPress,tintColor})=>{
            return (
        <Feather name="skip-back" size={24} color={tintColor} onPress={()=>navigation.goBack()} style={{marginLeft :11}}/>
            );
        },
        headerRight : ({})=>{
            return <Entypo name="home" size={24} color="black" onPress={()=>navigation.popToTop()}/>

        }
    }))
   },[])
    return (<Container>
           <StyledText>Chat</StyledText>
        <StyledText>{route.params.id}</StyledText>
        <StyledText>{route.params.name}</StyledText>
        <MyButton title="Home" onPress={()=>navigation.reset({routes:[{name:'Home'}]})}/>
        </Container>)
}

export default Chat;