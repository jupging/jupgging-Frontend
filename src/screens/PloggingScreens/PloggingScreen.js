import React, { useState, useEffect,useLayoutEffect,Component } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions,Image } from 'react-native';
import * as Location from 'expo-location';
import MapView,{Marker,AnimatedRegion,Polyline,MarkerAnimated} from 'react-native-maps';
import Icon from '../../images/Icon';
import { NavigationRouteContext } from '@react-navigation/native';
import {LATITUDE,LONGITUDE,LATITUDE_DELTA,LONGITUDE_DELTA}from '../../constants/location';
import haversine from 'haversine';


class PloggingScreen extends Component{

  
  constructor(props) {
    super(props);

  
    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
       latitude: LATITUDE,
       longitude: LONGITUDE,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA,
      })
    };
  }

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });
  componentDidMount() {

    
    Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 },
      position => {
        const { coordinate, routeCoordinates, distanceTravelled } =   this.state;
        const { latitude, longitude } = position.coords;
        
        const newCoordinate = {
          latitude,
          longitude
        };
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
           }
         } else {
           coordinate.timing(newCoordinate).start();
         }
         
         this.setState({
           latitude,
           longitude,
           routeCoordinates: routeCoordinates.concat([newCoordinate]),
           distanceTravelled:
           distanceTravelled + this.calcDistance(newCoordinate),
           prevLatLng: newCoordinate
         });
       },
       error => console.log(error),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  
  render(){
    return  <View style={styles.map}>
        
  <MapView
  style={styles.map}
  showUserLocation
  followUserLocation
  loadingEnabled
  region={this.getMapRegion()}
>
<Polyline coordinates={this.state.routeCoordinates} strokeWidth={5}  />
  
<MarkerAnimated
    ref={marker => {
      this.marker = marker;
    }}
    coordinate={this.state.coordinate}
  /> 


<MarkerAnimated
        ref={marker => { this.marker = marker }}
        coordinate={this.state.coordinate}
      />

    
</MapView>

   
    </View>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


export default PloggingScreen;