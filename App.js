// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);


  function openModalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setGoalsList((currentList) => [...currentList, enteredGoalText]);
  }

  function deleteGoalHandler(index, element) {
    console.log("DELETED", index, element);
    setGoalsList((currentList) => {
      return currentList.filter(function (geeks) {
        return geeks != element;
      });
    })
    console.log(goalsList);
  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={openModalHandler} title='Add Goal' />
      <GoalInput addGoal={addGoalHandler} visible={modalIsVisible} setVisible={setModalIsVisible} />
      <View style={styles.goalsContainer}>
        <ScrollView>
          {
            goalsList.map((element, index) => {
              return (
                <GoalItem key={index} element={element} index={index} deleteGoal={deleteGoalHandler} />
              )
            })
          }
        </ScrollView>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },


  goalsContainer: {
    marginTop: 2,
    paddingTop: 25,
    paddingHorizontal: 16,
    flex: 5,
    // borderWidth: 2,
    borderColor: 'black',
  },

});
