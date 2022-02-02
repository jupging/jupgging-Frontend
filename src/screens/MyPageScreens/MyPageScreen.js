import React,{useState} from "react";
import { Image,View,ScrollView,Button,TouchableOpacity} from "react-native";
import styled from 'styled-components/native'
import ProfileAvatar from "../../components/ProfileAvatar";
import ChallengeAcheiveCard from "../../components/ChallengeAcheiveCard";
import ChallengeList from "../../constants/ChallengeList";
import LevelCard from "../../components/LevelCard";
import Theme from "../../styles/Theme";
import LottieView from "lottie-react-native";
const Container = styled.View`
flex : 1;
justify-content : flex-start;
align-items : center;
padding:10px;
`

const SubContainer = styled.View`

width:100%;
justify-content : flex-start;
align-items : center;
background-color:white;
border-bottom-color : #dddddd;
border-bottom-width : 1px;
border-top-color : #dddddd;
border-top-width : 1px;
padding: 30px;
`
const StyledText = styled.Text`
font-size : 20px;
margin : 10px;
`;

const Medium = styled.Text`
font-size : 15px;
margin : 10px;
`;
const Line =styled.Text`
width : 100%;
border-bottom-color : #dddddd;
border-bottom-width : 1px;
`



const MyPageScreen = ({navigation})=>{
    
    const userID=undefined;
    const times=0; //플로깅 횟수
    const self_introduction='오늘도 즐거운 플로깅 : )' ;

    const [viewAll,SetViewAll]=useState(false);
 
    const [totalLiked,setTotalLiked]=useState(10);
    const animation =React.useRef(null);
    const isFirstRun =React.useRef(true);
    
    console.log(isFirstRun.current);
    const [isLiked,setIsLiked] =useState(false);
    React.useEffect (()=>{
      if(isFirstRun.current){
        if(isLiked){
          animation.current.play(84,84);
          console.log('1')
        }
        else{
          animation.current.play(0,0);
          console.log('2')
        }
        isFirstRun.current=false;
      }
      else if(isLiked){
       
        animation.current.play(0,84);
          console.log('3')
      }
      else{
        animation.current.play(84,111)
          console.log('4')
      
      }
     
    },[isLiked])

    const handleLikedCnt =()=>{
     
      if(isLiked){ //좋아요 버튼을 취소하면
        setTotalLiked(totalLiked-1)
      }
      else{
        setTotalLiked(totalLiked+1)
      }

      setIsLiked(!isLiked)
    }
    return( <Container> 
        <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
        <SubContainer>
          
        <TouchableOpacity 
        onPress={handleLikedCnt} style={{alignSelf:'flex-end',position:'absolute',top:0,right:10}} >
            <LottieView 
            ref ={animation}
            style={{width:70,height:70}} 
            source={require('../../../assets/lottie/93692-heart-animation.json')}
            autoPlay={false}
            loop={false}
           />
          </TouchableOpacity >
         <StyledText style={{position:'absolute',top:10,right:0,backgroundColor:Theme.mainColor,color:'white',borderRadius:5,textAlign:'left'}}>{totalLiked}</StyledText>
        <ProfileAvatar size='lg'/>
        <StyledText>{userID?userID:'GUEST'}</StyledText>
        <Medium>{self_introduction}</Medium>
        <Button title="프로필 편집" color={'black'} onPress={()=>navigation.navigate('MyPageEdit')}/*본인일때만 보이기*/ />
          <Line/>
        </SubContainer>
 
        <StyledText>플로깅 레벨
          </StyledText>
       <LevelCard times={times}  /*Level 카드로 몇번 뛰었는지 전달*//>
       <StyledText>플로깅기록</StyledText>

          <StyledText>챌린지</StyledText>
         
          {ChallengeList.map
          ((challenge)=><ChallengeAcheiveCard key={challenge.name} name={challenge.name} date="2022.02.01" condition={challenge.condition} badge={challenge.imageSrc}/>)}
          <Button title='모두 보기'/>

          
          </ScrollView>
        </Container>
    )
}

export default MyPageScreen;