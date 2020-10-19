import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    display: (state, action) => {
      state.todos = action.payload
    }
  },
  deleteTodo: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
  },
})

export const { display, deleteTodo, update, addTodo } = todosSlice.actions

export const getTodos = () => (dispatch) => {
  axios.get("/api/todos").then((r) => dispatch(display(r.data)))
}

export const addATodo = () => (dispatch) => {
  axios.post(`/api/todos`).then((r) => dispatch(addTodo(r.data)))
}


export const removeTodo = () => (dispatch) => {
  axios.delete("/api/todos").then((r) => dispatch(deleteTodo(r.data)))
}



export const selectTodo = (state) => state.todos.todos

export default todosSlice.reducer