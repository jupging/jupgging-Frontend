import React,{useLayoutEffect,useState} from "react";
import styled from 'styled-components/native'
import ProfileAvatar from "../../components/ProfileAvatar";
import { TextInput,View,TouchableOpacity } from "react-native";
import Layout from "../../constants/Layout";
import RadioGroup from 'react-native-radio-buttons-group';
import ImageSelector from "../../components/ImageSelector";

const Container = styled.View`
flex : 1;
justify-content : flex-start;
align-items : flex-start;
padding: 50px;
background-color: white;

`

const StyledText = styled.Text`
font-size : 15px;
margin-vertical : 10px;
color : black;
font-weight :bold;

`;

const Small =styled.Text`
font-size : 15px;
margin-vertical : 10px;
color : rgba(0,0,0,0.25);
align-self:center;
`

const TextInputStyle = {
    borderBottomColor:'#dddddd',
    borderBottomWidth:2,
    width: Layout.window.width-100
    ,marginBottom:20
}


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: '여성',
    value: 'female',

}, {
    id: '2',
    label: '남성',
    value: 'male'
}]
            


const MyPageEditScreen = ({navigation})=>{
 
    //나중에 API 만들어지면 유저 정보 받아온걸로 초기화하기.
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [nickname,setNickname]=useState('GUEST');
    const [introduction, setIntroduction] = useState('');
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [sex,setSex]=useState();
    const [imageUri,setImageUri]=useState();

    

    useLayoutEffect (()=>{ // []를 추가해 처음 마운트 될때만 호출되도록 설정.
            navigation.setOptions({
          
            headerRight : ({})=>{
                return <TouchableOpacity onPress={()=>alert('저장되었습니다.')}><StyledText>저장</StyledText></TouchableOpacity>}
    
            })
      
       },[])
    
 
    return (<Container>
        <View style={{alignSelf:'center'}}>

        <ImageSelector  imageUri={imageUri} setImageUri={setImageUri}/>

        </View>
        <StyledText>닉네임</StyledText>
        <TextInput 
        value={nickname}
        style={TextInputStyle} 
        autoCorrect={false}  
        placeholder="닉네임"
        maxLength={10} 
        />

        <StyledText>자기소개</StyledText>
        <TextInput 
        value={introduction}
        style={TextInputStyle} 
        autoCorrect={false}  
        placeholder="프로필에 표시될 자기소개 문구를 입력해주세요."
        maxLength={20} 
        />

        <StyledText>키</StyledText>
        <TextInput 
        value={height}
        style={TextInputStyle} 
        keyboardType='numeric'
        onChangeText={(text)=> {
            setHeight(text.replace(/[^0-9]/g, ''));
        }}
        placeholder="단위(cm)"
        maxLength={3} 
        />

        <StyledText>몸무게</StyledText>
        <TextInput 
        value={weight}
        style={TextInputStyle} 
        autoCorrect={false}  
        onChangeText={(text)=> {
            setWeight(text.replace(/[^0-9]/g, ''));
        }}
        placeholder="단위(kg)"
        maxLength={3} 
        />

        <StyledText>성별</StyledText>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={(radioButtonsArray)=>{
                setRadioButtons(radioButtonsArray);
                if(radioButtonsArray[0].selected==true)//여성이라면
                setSex('female');
                else
                setSex('male');
            }} 
            layout="row"
        />

       
        </Container>)
}

export default MyPageEditScreen;

