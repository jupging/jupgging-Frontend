import React from "react";
import { TouchableWithoutFeedback,Image} from "react-native";
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
  width: ${Layout.window.width / 2 - 30};
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
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;
const ContentContainer=styled.View`
background-color: white;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`
const ProductCard = ({item}) => {
    const { imgSrc, name, price, navigation }=item;

    const image_width =parseInt(Layout.window.width / 2 - 30);
    const image_height =parseInt(Layout.window.width / 2 - 30);
    return(
  <TouchableWithoutFeedback onPress={() => alert('click')}>
    <Container>
      <ImageContainer>
      <Image
        style={{borderTopLeftRadius:15 ,borderTopRightRadius:15,width:image_width,height:image_height}}
        source={{
          uri: imgSrc,
        }}
      />
    
      </ImageContainer>
      <ContentContainer>
      <Name>{name}</Name>
      <Price>{`$${price}`}</Price>
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
export default ProductCard;