import React from 'react';
import styled from 'styled-components/native';
import dummy from "../db/record_data.json";
import { StyleSheet,View,Text,Image,TouchableOpacity,Dimensions,ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

const Container = styled.View`
justify-content : center;
flex-direction: column;
background-color: white;
border-radius:10;
overflow: scroll;
margin-vertical:10px;
margin-horizontal:20px;
height : 300px;
`

const Title= styled.Text`
font-weight : bold;
font-size : 15;
margin-vertical: 10;
`

const Content =styled.Text.attrs({
    includeFontPadding: false
})`
color: gray
max-height : 50px;
`

const MyLineChart = () => {
    return (
      <>
        <LineChart
          data={{
            labels: ['', '', '', '', '', ''],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={180}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };

export default function RecordStatic() {
    const kilometerResult = dummy.reduce((acc_kil, cur_kil) => 
    acc_kil + cur_kil.kilometer, 0)
    const kcalResult = dummy.reduce((acc_kcal, cur_kcal) => 
    acc_kcal + cur_kcal.kcal, 0)
    const timeResult = dummy.reduce((acc_time, cur_time) => 
    acc_time + cur_time.time, 0)
    const dataResult = dummy.length;

    return <Container>
        <View style={styles.kilometer}>
            <Text style={styles.kilometerText}>{kilometerResult}km</Text>
        </View>
        <View>
            <MyLineChart />
        </View>
        <View style={styles.specific}>
            <Content >{kcalResult}kcal</Content>
            <Content>{timeResult}초</Content>
            <Content>{dataResult}회</Content>
        </View>
    </Container>
}

const styles = StyleSheet.create({
    kilometer:{
        flex: 0.65,
        paddingHorizontal: 20,
        paddingVertical:20,
    },
    kilometerText: {
        fontWeight : 'bold',
        fontSize : 25
    },
    specific: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});