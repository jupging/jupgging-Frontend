import 'react-native-gesture-handler';
import React, {createContext} from 'react';
import {View,Text} from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Navigations/Stack';
import DrawerNav from './Navigations/Drawer';


const Container = styled.View`
      flex: 1;
      alignItems: center;
      justifyContent: center;
  
`;

const  StyledText=styled.Text`
font-size: 30px;
font-weight: 600;
`;

function App() {

  return (
  <NavigationContainer>
      <DrawerNav/>
</NavigationContainer>
   
 
  );
}


export default App;
