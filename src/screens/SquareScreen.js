import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25

const SquareScreen = () => {
    const [redColor, setRedColor] = useState(0);
    const [greenColor, setGreenColor] = useState(0);
    const [blueColor, setBlueColor] = useState(0);

    const setColor = (color, change) => {
        if (color == "Red") {
            if (redColor + change > 255 || redColor + change < 0) {
                return;
            } else {
                setRedColor(redColor + change)
            }
        }

        if (color == "Green") {
            if (greenColor + change > 255 || greenColor + change < 0) {
                return;
            } else {
                setGreenColor(greenColor + change)
            }
        }

        if (color == "Blue") {
            if (blueColor + change > 255 || blueColor + change < 0) {
                return;
            } else {
                setBlueColor(blueColor + change)
            }
        }
    };

    return (
        <View>
            <ColorCounter colorName="Red" onIncrement={() => {
                setColor("Red" + COLOR_INCREMENT)
            }} onDecrement={() => {
                setColor("Red" + (-1 * COLOR_INCREMENT))
            }}>
            </ColorCounter>
            <ColorCounter colorName="Blue" onIncrement={() => {
                setColor("Blue" + COLOR_INCREMENT)
            }} onDecrement={() => {
                setColor("Blue" + (-1 * COLOR_INCREMENT))
            }}>
            </ColorCounter>
            <ColorCounter colorName="Green" onIncrement={() => {
                setColor("Green" + COLOR_INCREMENT)
            }} onDecrement={() => {
                setColor("Green" + (-1 * COLOR_INCREMENT))
            }}>
            </ColorCounter>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${redColor}, ${blueColor}, ${greenColor})` }}></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;