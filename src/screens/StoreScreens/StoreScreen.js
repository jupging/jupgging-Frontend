import React from 'react';
import { View,ScrollView,FlatList,Image } from 'react-native';
import styled from 'styled-components/native'
import ProductCard from '../../components/ProductCard';
import { AntDesign } from '@expo/vector-icons';
import StoreBannerImages from '../../images/StoreBannerImage';
import Layout from '../../constants/Layout';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : flex-start;
margin:10px;

`
const TextContainer = styled.View`
flex-direction:row;

`
const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const ProductData=[{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000 },{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000 },{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000 },{ imgSrc:'http://m.onlyeco.co.kr/web/product/big/202110/8fc1b511610659ce6ca753c1d06247aa.jpg',
 name: '(Walking for earth) 깨끗한 지구를 위한 플로깅 키트', price:21000 }]

const StoreScreen = ({navigation})=>{

    const renderItem = ({ item,idx}) => (
        <ProductCard item={item} key={idx}/>
      );
    return <Container>
        <ScrollView>
        <Image source={StoreBannerImages[0]} style={{width: Layout.window.width ,height:500}}/>
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
      
      </ScrollView>
        </Container>
}

export default StoreScreen;