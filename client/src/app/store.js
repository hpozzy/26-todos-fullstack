import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/userTodos/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
});
