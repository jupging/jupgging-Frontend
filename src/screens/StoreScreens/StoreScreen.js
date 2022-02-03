import React from 'react';
import { View,ScrollView,FlatList,Image } from 'react-native';
import styled from 'styled-components/native'
import ProductCard from '../../components/ProductCard';
import { AntDesign } from '@expo/vector-icons';
import StoreBannerImages from '../../images/StoreBannerImage';
import ProductCard2 from '../../components/ProductCard2';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : flex-start;
margin:10px;

`

const SubContainer = styled.View`
flex-direction:row;
justify-content : center;
align-items : flex-start;
margin:10px;
flex-wrap:wrap;

`
const TextContainer = styled.View`
flex-direction:row;

`
const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const ProductData=[
  { imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg', name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000 ,url:'https://project1907.com/product/runnning-for-earth-%EA%B9%A8%EB%81%97%ED%95%9C-%EC%A7%80%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%94%8C%EB%A1%9C%EA%B9%85-%ED%82%A4%ED%8A%B8/94/category/56/display/1/'},{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000,url:'https://project1907.com/product/runnning-for-earth-%EA%B9%A8%EB%81%97%ED%95%9C-%EC%A7%80%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%94%8C%EB%A1%9C%EA%B9%85-%ED%82%A4%ED%8A%B8/94/category/56/display/1/' },{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000,url:'https://project1907.com/product/runnning-for-earth-%EA%B9%A8%EB%81%97%ED%95%9C-%EC%A7%80%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%94%8C%EB%A1%9C%EA%B9%85-%ED%82%A4%ED%8A%B8/94/category/56/display/1/' },{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000,url:'https://project1907.com/product/runnning-for-earth-%EA%B9%A8%EB%81%97%ED%95%9C-%EC%A7%80%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%94%8C%EB%A1%9C%EA%B9%85-%ED%82%A4%ED%8A%B8/94/category/56/display/1/' }]


const StoreScreen = ({navigation})=>{

    const renderItem = ({ item,idx}) => (
        <ProductCard item={item} key={idx}/>
      );
    return <Container>
        <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
        <Image source={StoreBannerImages[0]} style={{width: '100%' ,height:500}}/>
            <StyledText>플로깅키트와 함께 
            지구를 지켜요🌱</StyledText>
            <TextContainer>
            <StyledText>추천 아이템</StyledText>
            <AntDesign style={{alignSelf:'center',color:'gray'}}name="right" size={24} color="black" onPress={()=>alert('hi')}/>
            </TextContainer>
       <FlatList 
       data={ProductData} 
       renderItem={renderItem}
       keyExtractor={item => item.id}
       horizontal={true}
       showsHorizontalScrollIndicator={false}

       />
        <TextContainer>
            <StyledText>모든 아이템</StyledText>
            <AntDesign style={{alignSelf:'center',color:'gray'}}name="right" size={24} color="black" onPress={()=>alert('hi')}/>
            </TextContainer>
            <SubContainer>
            <ProductCard2 item={ProductData[0]}/>
            <ProductCard2 item={ProductData[0]}/>
            <ProductCard2 item={ProductData[0]}/>
            <ProductCard2 item={ProductData[0]}/>
            </SubContainer>
      
      </ScrollView>

        </Container>
}

export default StoreScreen;