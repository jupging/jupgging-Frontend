import React from "react";
import {  View, StyleSheet,Platform,Text, ToastAndroid } from "react-native";

export const Shadow = () =>{
    return (
   
    <View style ={styles.Shadow}>
         <Text>{Platform.OS ==='ios'? 'ios' :'android'}</Text>
    </View>
    );
};

const styles =StyleSheet.create({
    Shadow: {
        
        width : 200,
        height: 200,
        ...Platform.select({
            ios:{
                backgroundColor: 'red',
                shadowColor: '#000000',
                shadowOffset: {
                    width:10,
                    height:10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
           android: {
            backgroundColor: 'blue',
            elevation: 20,

           }
         })      
    },
});


