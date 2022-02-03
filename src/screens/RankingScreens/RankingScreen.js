import React, { useState } from "react";
import {Button,ScrollView,Modal,View} from 'react-native'
import styled from 'styled-components/native'
import Podium from '../../components/Podium'
import RankingCard from "../../components/RankingCard";
import Theme from "../../styles/Theme";
import LottieView from "lottie-react-native";
import UserDetailModal from "./UserDetailModal";
import DropDownPicker from 'react-native-dropdown-picker';

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
font-family : NanumSquareR;

`;

const RankingScreen = ({navigation})=>{

    const [modalVisible,setModalVisible] = useState(false);
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
            temp.push(  < RankingCard key={i} rank={i} nickname={'user'+i} times={max_rank-i} bgColor={'#dddddd'} txtColor={'black'}/>)
        }
        return temp;
    }

    const modalData ={
        userId: 1234,
        userName: 'flowersayo',
        badge: [1,0,1,0,1,0,0,1,0,1,0]
    }
    const [open, setOpen] = useState(false);
    const [standard, setStandard] = useState('time'); //정렬 기준
 
    return (<Container>
        <UserDetailModal modalVisible={modalVisible} setModalVisible={setModalVisible} userData={modalData}/>
        
            <View style={{backgroundColor:'white',padding:20}}>
        <StyledText>내가 바로 지구 방위대</StyledText>
        
        <LottieView 
            style={{width:70,height:70,alignSelf:'center'}} 
            source={require('../../../assets/lottie/3956-earth.json')}
            autoPlay
            loop
           />
        <Podium data={podium_data}/>

        </View>
        <DropDownPicker
          open={open}
          value={standard}
          setOpen={setOpen}
          setValue={setStandard}
          items={[
              {label: '좋아요순', value: 'like'},
              {label: '횟수순', value: 'time'},
          ]}
          containerStyle={{height: 40,width:150,marginLeft:'auto',marginVertical:10}}
          onChangeItem={item => console.log(item.label, item.value)}
          onSelectItem={item=> setStandard(item.value)}
      />
       <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
        < RankingCard onPress={()=>setModalVisible(true)} rank={my_rank} nickname={my_nickname} times={my_times} bgColor={Theme.subColor} txtColor={'white'}  /* 내 자신의 순위*//>
      {getLankList()}
        <Button title="모두보기" width={10} height={10} color={Theme.mainColor}/>
        </ScrollView>
        </Container>)
}

export default RankingScreen;