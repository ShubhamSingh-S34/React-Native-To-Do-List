// import React from 'react'

import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal } from "react-native"




function GoalInput(props) {
    const [enteredGoalText, setEnterGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnterGoalText('');
        props.setVisible(false);
    }
    function cancelHandler() {
        props.setVisible(false);
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Goals!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} />
                    <Button style={styles.button} title="Cancel" onPress={cancelHandler} />
                </View>

                {/* if we directly call the addGoal function from props, enetredGoalText would not pass through from here to parent . to pass data from child to parent data, we use addGoalHandler of this module */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderColor: "#CCCCCC",
        width: "90%",
        // marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
        // justifyContent: "space-between",
        // alignItems: "space-between"
    },
    button: {
        padding: 8,
    },
})

export default GoalInput