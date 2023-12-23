import React, { useReducer } from "react";
import { View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
    console.log(state)
    switch (action.colorToChange) {
        case 'Red':
            return { ...state, red: state.red + action.amount }
        case 'Green':
            return { ...state, green: state.green + action.amount }
        case 'Blue':
            return { ...state, blue: state.blue + action.amount }
        default:
            return state
    }
}


const ReduxSquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, blue, green } = state;

    return (
        <View>
            <ColorCounter colorName="Red" onIncrement={() => 
                 dispatch({ colorToChange: "Red", amount: COLOR_INCREMENT })
            } onDecrement={() => {
                return dispatch({ colorToChange: "Red", amount: -1 * COLOR_INCREMENT })
            }}>
            </ColorCounter>
            <ColorCounter colorName="Blue" onIncrement={() => {
                return dispatch({ colorToChange: "Blue", amount: COLOR_INCREMENT })
            }} onDecrement={() => {
                return dispatch({ colorToChange: "Blue", amount: -1 * COLOR_INCREMENT })
            }}>
            </ColorCounter>
            <ColorCounter colorName="Green" onIncrement={() => {
                return dispatch({ colorToChange: "Green", amount: COLOR_INCREMENT })
            }} onDecrement={() => {
                return dispatch({ colorToChange: "Green", amount: -1 * COLOR_INCREMENT })
            }}>
            </ColorCounter>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${blue}, ${green})` }}></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ReduxSquareScreen;