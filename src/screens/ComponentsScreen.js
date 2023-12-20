import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    var smallText = "My name is Name1";
    return (
    <View>
        <Text style={styles.bigTextStyle}>Getting started with React Native!</Text>
        <Text style={styles.smallTextStyle}>{smallText}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    bigTextStyle:{
        fontSize: 45
    },
    smallTextStyle:{
        fontSize: 20
    }
});


export default ComponentsScreen;