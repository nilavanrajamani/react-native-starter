import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!!! Super da</Text>
      <Button onPress={() => { props.navigation.navigate('Components');}} title="Go to Components Demo"/>
      <Button onPress={() => { props.navigation.navigate('List');}} title="Go to List Demo"/>
      <Button onPress={() => { props.navigation.navigate('Image');}} title="Go to Image Screen"/>
      <Button onPress={() => { props.navigation.navigate('Counter');}} title="Go to Counter Screen"/>
      <Button onPress={() => { props.navigation.navigate('Color');}} title="Go to Color Screen"/>
      <Button onPress={() => { props.navigation.navigate('Square');}} title="Go to Square Screen"/>
      <Button onPress={() => { props.navigation.navigate('ReduxSquare');}} title="Go to Redux Square Screen"/>
      <Button onPress={() => { props.navigation.navigate('ReduxCounter');}} title="Go to Redux Counter Screen"/>
      <Button onPress={() => { props.navigation.navigate('TextDisplay');}} title="Go to Text Screen"/>
      <Button onPress={() => { props.navigation.navigate('PasswordValidator');}} title="Go to Password Validator Screen"/>
      <Button onPress={() => { props.navigation.navigate('Box');}} title="Go to Box Screen"/>      
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
