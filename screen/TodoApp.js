import { Alert, Modal, SectionList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem, updateTodoItem } from '../features/todoSlice';
import TodoItem from '../components/TodoItem';
const TodoApp = () => {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  let state = useSelector(state => state);
  const dispatch = useDispatch();

  let date = new Date()
  let day = date.getDate();
  let month = date.toLocaleString('en-En', { month: 'long' });
  let year = date.getFullYear();
  let today = `${month.toLocaleString()} ${day}, ${year}`

  const addTodo = () => {
    let obj = {
      title: todo,
      isDone: false
    }
    dispatch(addTodoItem(obj))

    setModalVisible(!modalVisible)
  }
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.date}>
        <Text style={styles.text}>{today}</Text>
        <SectionList
          sections={state.todo.value}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <TodoItem isDone={item.isDone} title={item.title} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
        {

          // state.todo.value.map((e) => (
          //   <TodoItem isDone={e.isDone} title={e.title} />
          // ))

        }

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }} >
          <View style={styles.modalWrap}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                placeholder='Todo'
                onChangeText={settodo}
              />
              <TouchableOpacity
                onPress={() => addTodo()}>
                <Text style={styles.modalText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity style={styles.createButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.createButton.text}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    color: "#EBEBEB",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16
  },
  content: {
    backgroundColor: "#141419",
    flex: 1
  },
  date: {
    marginHorizontal: 16,

  },
  text: {
    color: "#DADADA",
    fontSize: 32,
    fontWeight: "700"
  },
  modalWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: "center",
    flex: 0.2,
    width: "80%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-around",
  },
  modalText: {
    marginBottom: 15,
    color: "#141419",
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: "#473FA0",

    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#515CC6",
    text: {
      fontSize: 28,
      color: "white"
    }
  },
  input: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    borderColor: "#141419",
    borderWidth: 1,
    borderStyle: "solid"
  }
})
export default TodoApp
