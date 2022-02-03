import React from "react";
import { TouchableWithoutFeedback,Image,Linking} from "react-native";
import { withNavigation } from "react-navigation";

import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const Container = styled.View`
  margin-bottom: 20px;
  margin-horizontal:5px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${parseInt(Layout.window.width / 2 - 30)}px;
  elevation: 4;
  min-height: 150px;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 10px;
  max-width:150px;
  
`;

const Price = styled.Text`
  font-weight:bold;
  margin-left: 10px;
  color: ${Colors.blackColor};
  font-size: 20px;
`;
const ContentContainer=styled.View`
background-color: white;

`
const ProductCard2 = ({item}) => {
    const { imgSrc, name, price, navigation,url }=item;

    const image_width =parseInt(Layout.window.width / 2 - 30);
    const image_height =parseInt(Layout.window.width / 2 - 30);
    return(
  <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
    <Container>
      <ImageContainer>
      <Image
        style={{width:image_width,height:image_height}}
        source={{
          uri: imgSrc,
        }}
      />
    
      </ImageContainer>
      <ContentContainer>
      <Price>{`$${price}`}</Price>
      <Name>{name}</Name>
    
      </ContentContainer>
    </Container>
  </TouchableWithoutFeedback>
    )};
/*
ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
*/
export default ProductCard2;