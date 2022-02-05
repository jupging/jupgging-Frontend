import React,{useState} from 'react';

import { ScrollView } from 'react-native';
import MyCarousel from '../../components/MyCarousel';
import styled from 'styled-components/native'

import FlatCard from '../../components/FlatCard';
import PhotoCard from '../../components/PhotoCard';
import axios from 'axios';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;


`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
align-self:flex-start;
margin-left : 20px
`;
function FeedScreen({route,navigation}) {

  const [news,setNews]=useState([]);

  React.useEffect(()=>{

    axios.get('http://34.64.172.7:8080/news')
    .then(function (response) {
      if(response.data.isSuccess){
        const newsdata =response.data.result;
       setNews(newsdata); 
      
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  },[])
  


  return (<Container>
    <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
    <MyCarousel/>
    <StyledText>플로깅 뉴스</StyledText>
    {news.map((item,idx)=><FlatCard key={item.newsId} item={item}/>)}
  
    <StyledText>플로깅 코스추천</StyledText>
  <PhotoCard/>
    </ScrollView>
        </Container>);
}

export default FeedScreen;
