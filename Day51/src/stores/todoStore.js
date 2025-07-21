import { create } from "zustand";

export const useTodoStore = create((set) => (
  { 
    todos: [],
    addTodo : (newTodo) => set((state) => ({
      todos: [...state.todos, newTodo]
    })),
  }
))