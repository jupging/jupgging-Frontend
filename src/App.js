import 'react-native-gesture-handler';
import React, {createContext} from 'react';
import { NativeBaseProvider, extendTheme } from "native-base";
import styled from 'styled-components/native';

import Navigation from './Navigations';

const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
  const theme = extendTheme({ colors: newColorTheme });


function App() {

  return (
    <NativeBaseProvider theme={theme}>
    <Navigation/>
    </NativeBaseProvider>
 
  );
}


export default App;
