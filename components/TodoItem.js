import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { updateTodoItem } from '../features/todoSlice';
const TodoItem = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(props.isDone)
    const dispatch = useDispatch();
    const updateTodo = () => {
        let obj = {
            title: props.title,
            isDone: props.isDone
        }
        dispatch(updateTodoItem(obj))
    }
    return (
        <View style={styles.content}>
            <View style={styles.checkBox}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#2B2D37"
                    unfillColor="#2B2D37"
                    isChecked={props.isDone}
                    r textComponent={<Text style={props.isDone ? { color: "#DADADA", fontSize: 18, marginLeft: 10 } : { color: "#575767", fontSize: 18, marginLeft: 10 }}>{props.title}</Text>}
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={() => updateTodo()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    checkBox: {
    },
    text: {
        fontSize: 18,
        color: '#DADADA',
        marginLeft: 10
    }
})


export default TodoItem