import React from "react";
import {  View, Button,ImageBackground,Image } from "react-native";
import MyButton from "../../components/MyButton";
import * as Google from "expo-google-app-auth";
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import Icon from "../../images/Icon";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import Theme from "../../styles/Theme";
import axios from 'axios';
import { BASE_URL } from "../../constants/Api";
const Container = styled.SafeAreaView`
flex : 1;
justify-content : center;
align-items : center;
background-color:white;

`
const StyledText = styled.Text`
font-size : 60px;
font-family : NanumBarunGothicUltraLight;
text-align:center;
color:#65F6E9;

`;

const Small = styled.Text`
font-size : 20px;
font-family : NanumBarunGothicUltraLight;
text-align:center;
color : ${Theme.mintColor}
`;
const ButtonContainer = styled.View`
margin-top:auto;
width :100%;
`

const SubContainer = styled.SafeAreaView`
justify-content : center;
align-self : center;
background-color: transparent;
`

/*
1. sign - in api

*/

const LoginScreen = ({ navigation }) => {

    const [loaded] = useFonts({ 
        NanumBarunGothicUltraLight: require('../../../assets/font/NanumBarunGothicUltraLight.ttf'),
    });

    const storeLoginData =async (userInfo)=>{
        try{
              await AsyncStorage.setItem('userInfo',JSON.stringify(userInfo)); 
               
           }
            catch(e){ console.log('유저 토큰 저장 실패'); }
        } 
    
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user,accessToken } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `237516281102-20ua63ld68kq02ohkha3654pgrl53id0.apps.googleusercontent.com`,
      });

    if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success to get google api");
       console.log(user);

        axios.post(`${BASE_URL}/auth/sign-in`,{email:user.email})
        .then(function (response) {

            console.log(response.data);
          if(response.data.isSuccess){
           
            console.log(response.data);
            const result = response.data.result;
            const userInfo={userId:result.userId,token:result.accessToken};

            //로컬에 토큰과 유저 아이디 저장시키기
            storeLoginData(userInfo);
            
            navigation.navigate("Signin",{token:userInfo.token});
            /*
            if(result.new){
                //회원가입 화면으로
                navigation.navigate("Signin");
            }
            else{
                // 일반 홈화면으로
                navigation.navigate("Home");
            }
            */
          
          }
          else{
              console.log('로그인 요청 실패')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        

  
      
    }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  if(!loaded)
  return null;

  return (
    <Container>
         <Image source={Icon.Shoe} style={{width:100,height:100}}/>
     <StyledText>JUPGGING</StyledText>
     <Small>Run for Earth</Small>
   
     <Image source={Icon.HandsOnEarth} style={{width:100,height:100,margin:30}}/>
   <SubContainer>
     <ButtonContainer>
      <MyButton title="구글계정으로 로그인하기" onPress={signInAsync} bgColor={'white'}  txtColor={'#5f5f5f'} type='google'/>
      <MyButton title="카카오계정으로 로그인하기" onPress={()=>alert('구현 준비중')} bgColor={'#f9e000'}  txtColor={'#3c1e1e'} type='kakao'/>
      </ButtonContainer>
      </SubContainer>
   
    </Container>
  );
};

export default LoginScreen;