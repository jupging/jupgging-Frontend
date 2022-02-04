import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from "./HomeNav";
import FeedStackNav from "./FeedStackNav";
import { MyPageEditScreen,LoginScreen,SigninScreen,TutorialScreen} from "../screens";
const Stack = createNativeStackNavigator();

const MainStackNav = ()=>{

    const checkAuth =()=>{
        // local 에서 userId를 가져왔을때 정보가 있다면 바로 Home으로 보내고, 그렇지 않으면 Login으로
    }
    return ( 
    <Stack.Navigator initialRouteName="Home"
                            screenOptions={{headerShown: true}} >

        <Stack.Screen name="Home" component={HomeNav} options={{headerShown:false}}  />                        
        <Stack.Screen name="FeedDetail" component={FeedStackNav} />
       <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false }}/>
        <Stack.Screen name="Signin" component={SigninScreen}  options={{headerTitle:'회원가입',cardStyle:{backgroundColor:'white'}}} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} options={{headerShown:false,cardStyle:{backgroundColor:'white'}}}/>
    </Stack.Navigator>);
}


export default MainStackNav;