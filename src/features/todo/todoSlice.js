import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {id: nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo) {
                todo.text = text
            }
        },
        editTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.isEditing = true
            }
        },
        cancelEditTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.isEditing = false
            }
        },
    }
})


export const {addTodo, removeTodo, updateTodo, cancelEditTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer