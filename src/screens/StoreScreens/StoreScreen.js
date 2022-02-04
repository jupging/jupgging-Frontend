import React, { useState } from 'react';
import { View,ScrollView,FlatList,ImageBackground,Image,Text  } from 'react-native';
import styled from 'styled-components/native'
import ProductCard from '../../components/ProductCard';
import { AntDesign } from '@expo/vector-icons';
import StoreBannerImages from '../../images/StoreBannerImage';
import { useFonts } from 'expo-font';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import { BASE_URL } from '../../constants/Api';
import Layout from '../../constants/Layout';
const Container = styled.View`
flex : 1;
justify-content : center;
align-items : flex-start;
padding:10px


`

const SubContainer = styled.View`
flex-direction:row;
justify-content : center;
align-items : flex-start;
margin:10px;
flex-wrap:wrap;

`

const StyledText = styled.Text`
font-size : 30px;
margin-vertical : 10px;
font-family:NanumSquareR;
`;

const Small = styled.Text`
font-size : 10px;
color:red;
`;

const StoreScreen = ({navigation})=>{
const [productList,setProductList] = useState([])
const [index,setIndex]=useState(1); // 상점 몇번째 배너인지

  React.useEffect(()=>{

    axios.get(`${BASE_URL}/shop`)
    .then(function (response) {
      if(response.data.isSuccess){
      console.log(response.data);
      setProductList(response.data.result);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  },[])
  
    const renderItem = ({ item,idx}) => ( // 아이템 flatlist
        <ProductCard item={item} key={item.productId}/>
      );

      const renderStoreBanner = ({ item,idx}) => ( // 아이템 flatlist
        <ImageBackground source={item} key={item.productId} style={{backgroundColor:'red',alignSelf:'center',width:Layout.window.width,height:500}}>
          <Text style={{position:'absolute',bottom:30,right:50,color:'white',backgroundColor:'black',padding:10}}>{index}/4</Text>
          </ImageBackground>
        
      );

      const [loaded] = useFonts({ NanumSquareR: require('../../../assets/font/NanumSquareR.ttf') });
      if(!loaded)
      return null;
  
    return (<Container>
        <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
           <StyledText>플로깅으로 지구를 지켜요🌱</StyledText>
           
            <StyledText>추천 아이템</StyledText>
        
          
            <Carousel
                  data={StoreBannerImages}
                  renderItem={renderStoreBanner}
                  onSnapToItem={(index) => setIndex(index) }
                  windowSize={21}
                  sliderWidth={Layout.window.width}
                  sliderHeight={300}
                  itemHeight={500}
                  itemWidth={Layout.window.width}
                  autoplay={false}
                  activeSlideAlignment='center'
             
                
                ></Carousel>
           
           
            <StyledText>모든 아이템  <AntDesign style={{alignSelf:'center',color:'gray'}}name="right" size={24} color="black" onPress={()=>alert('hi')}/></StyledText>
          
            
       <FlatList 
       data={productList} 
       renderItem={renderItem}
       keyExtractor={item => item.productId}
       horizontal={true}
       showsHorizontalScrollIndicator={false}

       />
       
         
      
      </ScrollView>

        </Container>)
}

export default StoreScreen;