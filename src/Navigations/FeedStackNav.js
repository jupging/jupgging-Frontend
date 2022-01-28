import React,{useLayoutEffect} from 'react';
import { FeedScreen,FeedCardDetailScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

/*피드 화면 */
const Stack = createNativeStackNavigator();


function FeedStackNav({navigation,route}) {

  return ( <Stack.Navigator  initialRouteName='FeedCardDetailScreen'
    screenOptions={{
      headerStyle : {backgroundColor:'white'},
      headerShown : false
  }} >

  <Stack.Screen  name="FeedCardDetail" component={FeedCardDetailScreen}  />
  </Stack.Navigator>);
}

export default FeedStackNav;
