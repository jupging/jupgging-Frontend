import React from 'react';

import { StyleSheet, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import RecordCard from "../../components/RecordCard.js";
// import RecordFilter from "../../components/RecordFilter.js";
import RecordStatic from "../../components/RecordStatic.js";
import dummy from "../../db/record_data.json";

const Container = styled.View`

justify-content : center;
flex-direction: column;

`

const StyledText = styled.Text`
font-size : 20px;
margin : 10px;
flex-direction : row;
justify-content : flex-start;
`;


const RecordScreen = ({navigation})=>{

    // const [number, setNumber] = useState(0)

    // const getData = (number) => {
    //     setNumber(number);
    // }

    return (<Container>
        {/* <RecordFilter number={number} getData={getData}/> */}
        {/* <p>선택 달 : {number}</p> */}
        <RecordStatic />
        <StyledText>최근 플로깅 기록</StyledText>
        <ScrollView style={styles.scrollView}>
        {dummy.map((item,idx)=><RecordCard key={idx} item={item}/>)}
        </ScrollView>
        </Container>);
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height : 330
    }
})

export default RecordScreen;