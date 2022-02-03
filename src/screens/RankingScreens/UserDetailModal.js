
import React from "react";
import {Modal,Button} from 'react-native';
import styled from 'styled-components/native'
import ProfileAvatar from "../../components/ProfileAvatar";
import LevelCard from "../../components/LevelCard";
const Container = styled.View`

width:300px;
height:500px;
align-self:center;
justify-content : flex-start;
align-items : center;
background-color:white;
border:1px solid black;
border-radius:10px;
margin:auto;

`

const StyledText = styled.Text`
font-size : 20px;
margin : 10px;
`;

function UserDetailModal({modalVisible,setModalVisible,userData}) {

   const {userId,userName,badge}=userData;
    //const userName=undefined;
    //const badge=[1,0,1,0,1,0,0,1,0,1,0]; //길이 11짜리 bool배열
  return (<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
    <Container>

<ProfileAvatar size={'lg'}/>
    <StyledText>{userName?userName:'Guest'}</StyledText>
    <LevelCard times={0}/>
    <Button title="마이페이지 방문"/>
    </Container>
  
  
  </Modal>);
}

export default UserDetailModal;

