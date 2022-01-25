import React from 'react';
import styled from 'styled-components/native'
import MyButton from '../components/MyButton';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;

`;

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
`;

const items=[
    {id:1,name : "name1"},
    {id:2,name : "name2"},
    {id:3,name : "name3"},
]

const List = ({navigation})=>{
    return <Container>
        {items.map(({id,name})=><MyButton key={id} title ={name} onPress={()=>navigation.navigate('Chat',{id,name})}/>)}

        </Container>
}

export default List;