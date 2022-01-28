import React from 'react';
import { View,ScrollView,FlatList } from 'react-native';
import styled from 'styled-components/native'
import ProductCard from '../../components/ProductCard';
const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

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

    const renderItem = ({ item }) => (
        <ProductCard item={item} />
      );
    return <View>
        <StyledText>PloggingStoreScreen</StyledText>
       <FlatList 
       data={ProductData} 
       renderItem={renderItem}
       keyExtractor={item => item.id}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       />
      
     
        </View>
}

export default StoreScreen;