import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet,View,Text,Image,TouchableOpacity,Linking } from 'react-native';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;
flex-direction: row;
background-color: white;
border-radius:10;
overflow: hidden;
margin-vertical:10;
margin-horizontal:20;
height : 100px;
`

const Title= styled.Text`

font-weight : bold;
font-size : 20px;
margin-bottom:5px;

`

const Content =styled.Text.attrs({
    includeFontPadding: false
})`
color: gray
max-height : 100;
font-size : 15px;
`
function FlatCard({item}) {
    /*
    Object {
        "contents": "한국건강관리협회(회장 김인원)는 서울 강서구둘레길 일대에서 환경정화 플로깅
 봉사활동을 실시했다고 지난 27일 밝혔다.",
        "link": "http://www.bosa.co.kr/news/articleView.html?idxno=2167458",
        "newsId": 6,
        "newsImage": "http://cdn.bosa.co.kr/news/photo/202201/2167458_198913_1851.png",        
        "title": "건협, 환경정화 플로깅 봉사활동 실시",
      }
      */
    const {newsId,newsImage,title,contents,link}=item;

    const trimed = (contents.substring(0,60)).replace('\n','') + '...';
  return <Container>
      <Image style={styles.image} source={{  uri: newsImage}}/>
   
      <View style={styles.conntentContainer}> 
      <TouchableOpacity onPress={()=>Linking.openURL(link)} >
      <Title>{title}</Title>
     
      <Content >{trimed}</Content>
      </TouchableOpacity>
      </View>
    
  </Container>;
}


const styles = StyleSheet.create({
    image:{
        flex : 0.35,
        height: '100%',
      
    },
    conntentContainer:{
        flex: 0.65,
        paddingHorizontal: 20,
        paddingVertical:20,
    
    }
});
export default FlatCard;
