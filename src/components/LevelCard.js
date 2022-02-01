import React from 'react';
import { Image,View} from 'react-native';
import styled from 'styled-components/native'
import LevelSystem from '../constants/LevelSystem';
import ProgressBar from 'react-native-progress/Bar';

const Container = styled.View`
flex : 1;
justify-content : flex-start;
align-items : flex-start;
border-radius: 10px;
background-color: ${({bgColor})=>bgColor?bgColor:white};
margin-vertical :10px;
padding-left:10px;
`

const Large = styled.Text`
font-size : 100px;
margin-horizontal : 10px;
color: white;
font-weight : bold;
`

const Medium = styled.Text`
font-size : 20px;
color: white;
margin:10px;

`
const Small = styled.Text`
font-size : 10px;
margin-vertical : 10px;
color: white;
`


function LevelCard({ times}) {
    function getLevel(times){
        if(times>=150)
        return 6; //플로깅 횟수 150회 이상은 다 무지개로 예외처리 해주기

        for(var i=0;i<=LevelSystem.length-2;i++){
            if(LevelSystem[i].condition<=times&& times<LevelSystem[i+1].condition)
                    return LevelSystem[i].lv;
        }
    
    }
    const level=getLevel(times);

  return (
  <Container bgColor={LevelSystem[level].bgColor }>
     

     
      <Medium>Lv {level}. {LevelSystem[level].name}</Medium>
      <Image source={LevelSystem[level].imgSrc} style={{width:150,height:150,position:'absolute',right:0,bottom:10}} />
     
      <View style={{flexDirection:'row'}}>
      <Large>{times}</Large>
      <Small style={{alignSelf:'flex-end'}}>번 달렸습니다.</Small>
      </View>
      {times>=150?<></>:<ProgressBar progress={times/LevelSystem[level+1].condition} width={200} color="white" unfilledColor="#dddddd" borderWidth={0}/>}
      {times>=150?<Small>만렙에 도달하신것을 축하합니다🎉🎊</Small>:<Small>다음레벨인 {LevelSystem[level+1].name}까지 {LevelSystem[level+1].condition-times}번 남음 </Small>}
   
      

  </Container>);
}

export default LevelCard;
