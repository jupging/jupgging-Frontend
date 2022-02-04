import React, { Component } from 'react';
import styled from 'styled-components/native';
import SelectDropdown from 'react-native-select-dropdown';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { render } from 'react-dom';

const Container = styled.View`

justify-content : center;
align-items : center;
flex-direction: column;
background-color: grey;
border-radius:10;
overflow: hidden;
margin-vertical:10px;
margin-horizontal:20px;
height : 30px;
width : 100%;
`
class Inputs extends Component {
    state = {
        month: "",
    };


    handleMonth = text => {
        this.setState({month:text});
    }

    render() {
        return (
            <TextInput
                onChangeText={this.handleEmail}
            />
        )
    }
}

export default Inputs;