import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from "./HomeNav";
import FeedStackNav from "./FeedStackNav";
const Stack = createNativeStackNavigator();

const MainStackNav = ()=>{
    return (// 
    <Stack.Navigator initialRouteName="Home"
                            screenOptions={{headerShown: false}} >

        <Stack.Screen name="Home" component={HomeNav}  />                        
        <Stack.Screen name="FeedDetail" component={FeedStackNav} />
       

    </Stack.Navigator>);
}


export default MainStackNav;