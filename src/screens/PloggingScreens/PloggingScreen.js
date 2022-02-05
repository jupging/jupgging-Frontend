import React, { useState, useEffect,useLayoutEffect,Component } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions,Image } from 'react-native';
import * as Location from 'expo-location';
import MapView,{Marker,AnimatedRegion,Polyline,MarkerAnimated} from 'react-native-maps';
import Icon from '../../images/Icon';
import { NavigationRouteContext } from '@react-navigation/native';
import {LATITUDE,LONGITUDE,LATITUDE_DELTA,LONGITUDE_DELTA}from '../../constants/location';
import haversine from 'haversine';
import ImageBtn from '../../components/ImageBtn';
import Label from '../../components/Label';


class PloggingScreen extends Component{

  
  constructor(props) {
    super(props);
/*
mode 

wait : 시작전 -> 재생버튼 렌더링
runnging : 러닝 중 -> 멈춤 버튼 렌더링


*/
  
    this.state = {
      mode : 'wait', 
      kcal : 0,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0, // 이동한 거리 
      prevLatLng: {},
      coordinate: new AnimatedRegion({
       latitude: LATITUDE,
       longitude: LONGITUDE,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA,
      }),
      trashLocations: [{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },{
        latitude: 37.80825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }],
    };
  }

  changeMode = mode =>{ // 버튼 클릭시 바뀌어질 모드.
    this.setState = {
      mode : mode,
    }
  }
  getIcon = mode =>{

    if(mode ==='wait'){ //대기중
      return <ImageBtn changeMode={this.changeMode} type='wait'/>;
      
    }
    else if(mode ==='running ') { //러닝중
      return <ImageBtn changeMode={this.changeMode} type='running'/>;

    }
    
  }
  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  calcKcal = distanceDelta=>{
    // 이동한 거리를 이용해 kcal 계산해주는 함수.
  }
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
           //kcal: kcal+ this.calcKcal(this.state.distanceTravelled),
           prevLatLng: newCoordinate
         });
       },
       error => console.log(error),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  
  render(){
    return  <View style={styles.map}>
        <Label name={'거리(km)'} value={this.state.distanceTravelled.toFixed(3)}/>

        {/** <Label name={'칼로리'} value={this.state.kcal}/> */}
       

  <MapView
  style={styles.map}
  showUserLocation
  followUserLocation
  loadingEnabled
  region={this.getMapRegion()}
  showsUserLocation
  tintColor='red'
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


{/*쓰레기통 위치*/this.state.trashLocations.map((location,idx)=><Marker
  key={idx}
  coordinate={location}
  title={'쓰레기통 위치'}
  description={'쓰레기통 위치'}
/>)}

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