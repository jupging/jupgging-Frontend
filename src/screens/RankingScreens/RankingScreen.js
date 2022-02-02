import React from "react";
import {Button,ScrollView} from 'react-native'
import styled from 'styled-components/native'
import Podium from '../../components/Podium'
import RankingCard from "../../components/RankingCard";
import Theme from "../../styles/Theme";
const Container = styled.View`
flex : 1;
padding:10px;
`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
font-weight: bold;
text-align : center;
color:black;

`;

const RankingScreen = ({navigation})=>{

    const my_rank=7;
    const my_nickname='flowersayo';
    const my_times=17;

    const podium_data ={
        _1st:{
            nickname:'1등닉네임',
            times : 100,
        },   
        _2nd:{
            nickname:'2등닉네임',
            times : 70,
        },
        _3rd:{
            nickname:'3등닉네임',
            times : 50,
        },
    }

    const getLankList=()=>{
        const temp=[];
        const max_rank=10;
        for(var i=1;i<=max_rank;i++){
            temp.push(  < RankingCard rank={i} nickname={'user'+i} times={max_rank-i} bgColor={'#dddddd'} txtColor={'black'}/>)
        }
        return temp;
    }
    return (<Container>
         <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
        <StyledText>내가 바로 지구 방위대🌍</StyledText>
        <Podium data={podium_data}/>
      
        < RankingCard rank={my_rank} nickname={my_nickname} times={my_times} bgColor={Theme.subColor} txtColor={'white'}  /* 내 자신의 순위*//>
      {getLankList()}
        <Button title="모두보기" width={10} height={10} color={Theme.mainColor}/>
        </ScrollView>
        </Container>)
}

export default RankingScreen;