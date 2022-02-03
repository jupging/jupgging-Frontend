import React from "react";
import {  View, Button,ImageBackground } from "react-native";
import MyButton from "../../components/MyButton";
import * as Google from "expo-google-app-auth";
import styled from 'styled-components/native'

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;


`

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user,accessToken } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `237516281102-20ua63ld68kq02ohkha3654pgrl53id0.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Signin", { user });
        console.log(accessToken);
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <Container>
      <ImageBackground source={{ uri: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F85885221-aeb9-4f4e-87dd-889a390fac64%2FUntitled.png?table=block&id=bcd8e017-702e-4409-8ddb-a0e06430ee06&spaceId=b19e4487-dfef-4395-9201-8b3dc303ca25&width=2000&userId=6607e252-6916-4ebd-8408-816dff57d023&cache=v2" }} resizeMode="cover" style={{
    flex: 1,
    justifyContent: "center",
    width:'100%',
    
  }}>
    
      <MyButton title="Login with Google" onPress={signInAsync} bgColor={'white'}  txtColor={'#5f5f5f'} type='google'/>
      </ImageBackground>
    </Container>
  );
};

export default LoginScreen;