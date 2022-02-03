import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components/native';
import { ProfileIcon } from '../images/Profile';
import ProfileAvatar from './ProfileAvatar';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`

export default function ImageSelector({setImageUri,imageUri}) {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult);
    setImageUri(pickerResult.uri);
  }
  
  return (
    <View style={styles.container}>

      {imageUri? <ProfileAvatar uri={imageUri} size={'xl'}/>:  <ProfileAvatar size={'xl'}/>}


      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>편집</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:100,
    height:100,
    alignSelf:'center'
  },
  instructions:{
    fontSize:10,

  },
  button:{
    color:'red'
  },
  buttonText:{
    fontSize : 15,
    margin : 10,
    color : 'rgba(0,0,0,0.4)',
    alignSelf:'center',
  },
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});