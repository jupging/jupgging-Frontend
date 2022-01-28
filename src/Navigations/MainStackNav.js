import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNav from "./DrawerNav";
import FeedStackNav from "./FeedStackNav";
const Stack = createNativeStackNavigator();

const MainStackNav = ()=>{
    return (<Stack.Navigator initialRouteName="Drawer"
                            screenOptions={{headerShown: false}} >
        <Stack.Screen name="FeedDetail" component={FeedStackNav} />
        <Stack.Screen name="Drawer" component={DrawerNav}  />

    </Stack.Navigator>);
}


export default MainStackNav;