import React from "react";
import styled from 'styled-components/native'
import {View, Text, Card, Button} from 'react-native-ui-lib';
import { StyleSheet, Dimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps'

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

export default class PlogginScreen extends React.Component {
    render() {
        return (
          <Container> 
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
          />
          </Container>
        );
    }
}