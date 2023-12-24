import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const PasswordValidator = () => {
    const [name, setName] = useState('');
    return (

        <View>
            <Text>Enter Name:</Text>
            <TextInput style={styles.input} autoCapitalize="none"
                autoCorrect={false}
                value={name} onChangeText={(newValue) => setName(newValue)} />
            <Text>My name is {name}</Text>
            <Text>{name.length >= 5 ? "The password is valid" : null}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default PasswordValidator;