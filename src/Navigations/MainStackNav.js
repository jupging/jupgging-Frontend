import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from "./HomeNav";
import FeedStackNav from "./FeedStackNav";
import { MyPageEditScreen } from "../screens";
const Stack = createNativeStackNavigator();

const MainStackNav = ()=>{
    return ( 
    <Stack.Navigator initialRouteName="Home"
                            screenOptions={{headerShown: true}} >

        <Stack.Screen name="Home" component={HomeNav} options={{headerShown:false}}  />                        
        <Stack.Screen name="FeedDetail" component={FeedStackNav} />
       <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />

    </Stack.Navigator>);
}


export default MainStackNav;