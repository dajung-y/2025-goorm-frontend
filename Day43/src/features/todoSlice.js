import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    isLoading: false,
    error: false
  },
  reducers: {
    addTodo(state, action){
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        complete: false,
      });
    },
    removeTodo(state,action){
      // 삭제 원하는 아이디와 다른 값만 남겨서 넘겨줌
      state.todos = state.todos.filter((todo) => todo.id !==action.payload)
    },
    completeTodo(state,action){
      const todo =  state.todos.find((todo) => todo.id === action.payload);
      if(todo) {
        todo.complete = !todo.complete;
      }
    }
  }
})

export const {addTodo, removeTodo, completeTodo} = todosSlice.actions;
export default todosSlice.reducer;