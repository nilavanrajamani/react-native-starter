import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', Age: 20 },
        { name: 'Friend #2', Age: 45 },
        { name: 'Friend #3', Age: 30 },
        { name: 'Friend #4', Age: 27 },
        { name: 'Friend #5', Age: 53 },
        { name: 'Friend #6', Age: 30 },
        { name: 'Friend #7', Age: 53 },
        { name: 'Friend #8', Age: 53 },
        { name: 'Friend #9', Age: 53 },
        { name: 'Friend #10', Age: 53 }
    ];
    return (
        <FlatList keyExtractor={(friend) => { return friend.name }}
            data={friends}
            renderItem={({ item }) => { return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text> }}
        />);
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;