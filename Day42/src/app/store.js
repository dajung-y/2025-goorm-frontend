import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/todos/todoSlice';

const store = configureStore({
  // 가져올 reducer 지정
  reducer:{
    todos: todosReducer,
  }
});

export default store;