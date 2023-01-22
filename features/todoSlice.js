import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            title: "Completed",
            data: [{ title: "Learn React Native", isDone: true }]
        },
        {
            title: "Incompleted",
            data: [{ title: "Kiss my darling", isDone: false }]
        }

    ]
}


export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodoItem: (state, action) => {
            let todo = state.value[1].data.find(q => q.title == action.payload.title);
            if (!todo)
                state.value[1].data.push(action.payload);
        },
        updateTodoItem: (state, action) => {
            let todo = action.payload.isDone
            if (todo) {
                const index = state.value[0].data.findIndex(t => t.title == action.payload.title);
                state.value[0].data.splice(index, 1)
                state.value[1].data.push({ title: action.payload.title, isDone: !action.payload.isDone })



            } else {
                const index = state.value[1].data.findIndex(t => t.title === action.payload.title);
                state.value[1].data.splice(index, 1)
                state.value[0].data.push({ title: action.payload.title, isDone: !action.payload.isDone })
            }
        },
    }
})

export const { addTodoItem, updateTodoItem } = todoSlice.actions
export default todoSlice.reducer;