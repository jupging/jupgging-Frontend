import React,{useEffect, useState} from 'react';
import styled from 'styled-components/native'
import Theme from '../../styles/Theme';
import { TextInput,Button,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import ImageSelector from '../../components/ImageSelector';
import axios from 'axios';
import { BASE_URL } from "../../constants/Api";

const Container = styled.SafeAreaView`
flex : 1;
justify-content : flex-start;
align-items : flex-start;
padding : 30px;


`
const StyledText = styled.Text`
font-size : 30px;
font-family : NanumSquareR;
`;


const SubText  = styled.Text`
font-size : 15px;
margin-vertical : 10px;
color: gray;
font-family : NanumSquareR;
`;

const HighLight =styled.Text`
font-size : 30px;

color:${ Theme.mintColor};
`;

const ButtonContainer = styled.View`
margin-top:80%;
width :100%;

`

const ImageContainer = styled.View`
align-self:center;
margin: 20px;
`


const TextInputContainer = styled.View`
align-self:center;
margin: 20px;
border: 1px solid #dddddd;
border-radius : 10px;
width : 100%;
padding : 10px;
`



function SigninScreen({route,navigation}) {

    const [loaded] = useFonts({ NanumSquareR: require('../../../assets/font/NanumSquareR.ttf') });
    const [imageUri,setImageUri]=useState();
    const [nickname,setNickname]=useState('')
    const [disabled,setDisabled]=useState(true);

    const token = route.params.token;

    console.log(token+'***');
    const handleTextChange=(text)=>{
        setNickname(text); 
        if(text.length>1) setDisabled(false);
        else setDisabled(true); 
    }


const submit =()=>{

    axios.put(`${BASE_URL}/auth/sign-up`,{nickName:nickname,profile:imageUri},{headers: {
        "X-ACCESS-TOKEN":  token //the token is a variable which holds the token
       } })
        .then(function (response) {

            console.log(response.data);
          if(response.data.isSuccess){
           
            console.log(response.data);
            navigation.navigate('Tutorial')
          
          }
          else{
              console.log('등록 요청 실패')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        

}
    if(!loaded)
    return null;

  return (
      <Container>
       <StyledText>줍깅에서 사용할 </StyledText>
   
  
  <HighLight>닉네임과 프로필 사진</HighLight>
  <StyledText>을 설정해주세요.</StyledText>
 
  <SubText>닉네임은 마이페이지에서 다시 변경할 수 있어요.</SubText>

  <ImageContainer>
  <ImageSelector imageUri={imageUri} setImageUri={setImageUri}/>
  </ImageContainer>
  <TextInputContainer>
  <TextInput 
  placeholder='닉네임을 10자 이내로 입력해주세요.' 
  value={nickname}
  style={{height:20,color:'black'}}
  maxLength={10}
  onChangeText={handleTextChange}  />
  </TextInputContainer>
  <ButtonContainer>
  <Button title='시작하기' color={Theme.mainColor} disabled={disabled} onPress={submit}/>
  </ButtonContainer>
  </Container>
    );
}

export default SigninScreen;
