// import React from 'react'

import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"




function GoalInput(props) {
    const [enteredGoalText, setEnterGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnterGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Goals!"
                onChangeText={goalInputHandler}
                value={enteredGoalText} />
            <Button title="Add Goal" onPress={addGoalHandler} />
            {/* if we directly call the addGoal function from props, enetredGoalText would not pass through from here to parent . to pass data from child to parent data, we use addGoalHandler of this module */}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // borderWidth: 2,
        // borderBottomColor: "#cccccc",

    },
    textInput: {
        borderWidth: 2,
        borderColor: "#CCCCCC",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
})

export default GoalInput