import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const initialState = {

}

const reduxFunction = (state, { type, payload }) => {
    switch (type) {
        case "increment":
            return { ...state, count: state.count + payload }
        case "decrement":
            return { ...state, count: state.count - payload }
        default:
            return state
    }
}


const ReduxCounterScreen = () => {
    const [state, dispatch] = useReducer(reduxFunction, { count: 0 })
    return (

        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: 1 })                
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement', payload: 1 })
            }} />
            <Text>Current Count:{state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ReduxCounterScreen;