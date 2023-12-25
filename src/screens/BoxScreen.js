import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',        
        justifyContent:'space-between'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'orange',
        width: 100,
        height: 100
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'green',
        width: 100,
        height: 100,
        top: 100
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'blue',
        width: 100,
        height: 100
    }
});

export default BoxScreen;