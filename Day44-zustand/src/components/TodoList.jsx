import React from 'react'
import { useTodoStore } from '../app/todoStore'

export default function TodoList() {

  const todos = useTodoStore((state) => state.todos);

  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
