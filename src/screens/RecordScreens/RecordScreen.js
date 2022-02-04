import React from 'react';

import styled from 'styled-components/native';
import RecordCard from "../../components/RecordCard.js";
// import RecordFilter from "../../components/RecordFilter.js";
import RecordStatic from "../../components/RecordStatic.js";
import dummy from "../../db/record_data.json";

const Container = styled.View`

justify-content : center;
align-items : center;

`

const StyledText = styled.Text`
font-size : 20px;
margin : 10px;
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
        {dummy.map((item,idx)=><RecordCard key={idx} item={item}/>)}
        </Container>);
}

export default RecordScreen;