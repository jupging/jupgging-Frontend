import React from 'react';
import { HStack,Avatar } from "native-base";
import { ProfileIcon } from '../images/Profile';
function ProfileAvatar({uri,size}) {
  return <HStack justifyContent="center" space={2}>
  <Avatar size={size} source={{
  uri: uri?uri:'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
}}
/>

</HStack>;
}

export default ProfileAvatar;
