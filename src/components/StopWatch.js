import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';

var _interval

const StopWatch = ({mode}) => {
    const [second, setSecond] = useState(0); // 처음 시작 초
    const [delay, setDelay] = useState(1000); // 딜레이 

    const [isRunning, setIsRunning] = useState(true);

    useInterval(() => {
        setSecond(second + 1)
    }, isRunning?delay:null);

    //setIsRunning(false);
//second / 60 % 60
    let hour = (Math.floor(second/3600)+'').padStart(2,'0')
    let minute = (Math.floor(second / 60 % 60)+'').padStart(2,'0')
    let sec =(Math.floor(second % 60)+'').padStart(2,'0')
    return (
        <Text style={{ ...styles.text}}>
            {hour}: {minute} : {sec} 
            </Text>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
            
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,

        color: 'black'
    }
})

export default StopWatch;