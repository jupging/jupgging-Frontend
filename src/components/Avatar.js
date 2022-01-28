import React from 'react';
import { HStack,Avatar } from "native-base";

function Avatar() {
  return <HStack justifyContent="center" space={2}>
  <Avatar bg="green.500" source={{
  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}}>AJ
</Avatar>
</HStack>;
}

export default Avatar;
