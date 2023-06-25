// import React from 'react'

import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native"

const img = require('../assets/images/goal.png');


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
                <Image source={img} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Goals!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Cancel" onPress={cancelHandler} color='#f31282' />
                    <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} color='#b180f0' />
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
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 2,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "90%",
        borderRadius: 6,
        // marginRight: 8,
        padding: 16,
        color: '#120438',
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
    image: {
        height: 100,
        width: 100,
        margin: 20,
    }
})

export default GoalInput