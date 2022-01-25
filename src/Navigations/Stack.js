import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,List,Chat} from '../screens'; /*폴더까지만 입력하면 폴더 아래에 있는 index.js 파일을 가져옴 */
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

const StackNav = ()=>{
    return (<Stack.Navigator initialRouteName="Home" 
    screenOptions = {{ 
        cardStyle: {backgroundColor: 'white'},
        headerStyle: { // 헤더 스타일
            height : 120,
            backgroundColor : '#555555',
            borderBottomWidth : 5,
            borderBottomColor : 'red',
            //color : 'red' // 헤더 글씨 색상 변경에 영향 X 

        },
        headerTitleStyle :{ //헤더 타이틀 스타일
            fontSize : 24,
            color : 'red',
        },
        headerTitleAlign : 'center', // 타이틀 정렬 기준 
        headerTitle : ({tintColor})=>{ // 헤더 타이틀 컴포넌트 교체
          
            return <MaterialCommunityIcons name="react" color={tintColor} size={24} />;
            
        },
        headerTintColor : 'pink' ,// 버튼(<-) 색상 , 버튼에만 적용되는 속성이 아니라 헤더 전체에 영향을 미치므로 타이틀도 영향
        headerBackTitle: 'Prev', //ios에서만 지원
        headerBackTitleVisible : true, //ios에서만 지원
        headerBackTitleStyle : {fontSize : 26}, // 뒤로가기 버튼 글자 스타일
      

    
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} options={{headerTitle: 'List Screen'}} />
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>);
}


export default StackNav;