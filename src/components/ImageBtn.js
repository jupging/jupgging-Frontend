import React from 'react';
import {Image,TouchableWithoutFeedback} from 'react-native';
import Icon from '../images/Icon';
function ImageBtn({changeMode,type}) {

  let imageSrc; 
  if(type ==='wait') //대기상태
  imageSrc= Icon.Play;
  else if(type =='running')
  imageSrc=Icon.Stop;

  const onPress = ()=>{
    if(type=='wait'){
      changeMode('running')
     console.log('운동을 시작합니다.')
    }
    else if (type =='running'){
      changeMode('')
      console.log('운동을 종료합니다.')
    }
 
  }
  return <TouchableWithoutFeedback onPress={onPress}>

      <Image source={imageSrc} style={{width:100,height:100,tintColor:'red'}} />
  </TouchableWithoutFeedback>;
}

export default ImageBtn;
