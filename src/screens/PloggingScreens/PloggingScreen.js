import React, { useState, useEffect,useLayoutEffect } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions,Image } from 'react-native';
import * as Location from 'expo-location';
import MapView,{Marker} from 'react-native-maps';
import Icon from '../../images/Icon';
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
    console.log(location);
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
>
    <Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      title={'쓰레기통 위치'}
      description={'쓰레기통 위치'}
    />

    <Marker
      coordinate={{
        latitude: 37.4515580,
        longitude: 126.7975343,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      title={'쓰레기통 위치'}
      description={'쓰레기통 위치'}
    />

<Marker
      coordinate={{
        latitude: 37.4515580,
        longitude: 126.7675343,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      title={'쓰레기통 위치'}
      description={'쓰레기통 위치'}
    />
     <Marker
      coordinate={{
        latitude: 37.4715580,
        longitude: 126.7975343,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      title={'쓰레기통 위치'}
      description={'쓰레기통 위치'}
    />


    {/**<Marker
      coordinate={location}
      title={'쓰레기통 위치'}
      description={'쓰레기통 위치'}
    /> */}
    
    
</MapView>

   
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