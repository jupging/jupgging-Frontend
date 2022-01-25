import React from "react"; 
import { NavigationContainer } from "@react-navigation/native"; 
import StackNav from "./Stack";
import DrawerNav from "./Drawer";

const Navigation=()=>{
return (<NavigationContainer>
    <DrawerNav/>
  </NavigationContainer>)
}

export default Navigation;