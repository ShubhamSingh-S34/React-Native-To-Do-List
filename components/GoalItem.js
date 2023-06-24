// import React from 'react'
import { StyleSheet, View, Text, Pressable } from "react-native"



function GoalItem(props) {


    function onDeleteHandler() {
        // console.log(props.index);
        props.deleteGoal(props.index, props.element);
    }
    return (
        <View>
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>
                    {props.element}
                </Text>
                <Pressable
                    style={styles.deleteBtn}
                    onPress={onDeleteHandler}>
                    <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        // color: 'white',
        flexDirection: 'row',
    },
    goalText: {
        color: 'white',
        borderRadius: 6,
        flex: 8,
    },
    deleteBtn: {
        flex: 2,
        padding: 0,
    },
    deleteText: {
        flexDirection: "colomn",
        alignContent: "center",
        alignItems: "center",
        // alignItems: "center",
        color: "white",
    }
})
export default GoalItem