import React from 'react'
import { useForm } from 'react-hook-form'
import { useTodoStore } from '../../stores/todoStore';

export default function TodoForm() {
  const {register, handleSubmit, reset} = useForm();
  const {todos, addTodo} = useTodoStore();
  const onSubmit = (data) => {
    const text = data.todo?.trim();
    if(!text) return;
    addTodo({
      id:Date.now(),
      text
    });
    reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('todo')}
                placeholder='할 일을 입력하세요' />
        <button type='submit'>추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
