import { create } from "zustand";

// create() : store를 만드는 함수
// set() : 상태를 변경하는 함수
// useTodoStore 사용자가 훅을 직접 만들어서 상태에 접근하고 조작할 수 있도록 한 것

/*

 create ((set,get)) => ({
  상태들(state 저장할 공간),
  액션들 : () => set(새로운 상태)
  
  })

 */

export const useTodoStore = create((set) => ({
  todos: [],
  // todo create
  createTodo: (title) => set((state) => ({
    todos: [...state.todos, {
      id: Date.now(),
      title
    }]
  })),
  // todo delete
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !==id),
  })),
}));