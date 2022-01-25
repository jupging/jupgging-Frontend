import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';

//custom button
const MyButton = ({title, onPress,children })=> {

    return (
        
        <TouchableOpacity 
         onPress= {onPress}
        >
        <View style={{backgroundColor: 'red', padding :10, margin: 10}}>
            <Text style ={{fontSize:20 , color:'white'}}>{children||title} </Text>
         </View>
         </TouchableOpacity>

    );
};

//defalut props값 지정
MyButton.defaultProps = {
title : 'defult',
onPress: () => alert('default'),
}

MyButton.propTypes= {
title : PropTypes.string, //title은 반드시 string값이 넘어와야함. 
onPress : PropTypes.func, // onPress는 반드시 함수가 넘어와야함.

}
export default MyButton;