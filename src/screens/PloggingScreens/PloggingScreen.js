import React, { useState, useEffect,useLayoutEffect } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

function PloggingScreen() {
  const [location, setLocation] = useState(null);
 

  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({latitude:location.coords.latitude,longitude:location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,})
      //console.log(location);
    })();

  }, []);

 
  return (
    <View style={styles.map}>
        <MapView
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
  style={styles.map}
  showUserLocation
  followUserLocation
  loadingEnabled
  region={location}
/>
        
   
    </View>
  );
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