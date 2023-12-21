import React from "react";
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ColorCounter = (props) => {
    return (
        <View>
            <Text>{props.colorName}</Text>
            <Button title={`More ${props.colorName}`} onPress={() => props.onIncrement()} ></Button>
            <Button title={`Less ${props.colorName}`} onPress={() => props.onDecrement()} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;