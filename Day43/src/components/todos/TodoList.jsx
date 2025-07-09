import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../../features/todoSlice';

export default function TodoList() {

  const {todos, isLoading, error} = useSelector(state => state.todos);

  const dispatch = useDispatch();

  return (
    <section className='flex justify-center my-4'>
      <div className='w-3xl'>
        <ul>
          { todos.map((todo) => (
            <li key={todo.id}
                className='flex justify-between items-center m-4 p-2 text-lg font-semibold bg-green-100 rounded-2xl'>
              <div>
                <input type='checkbox'
                        checked={todo.complete}
                        onChange={() => dispatch(completeTodo(todo.id))}
                        className='w-4 h-4  accent-green-800 mx-3 cursor-pointer' />
                <span className={todo.complete ? 'line-through' : ''}>
                  {todo.title}
                </span>
              </div>
              <button onClick={() => dispatch(removeTodo(todo.id))}
                      className='px-2 bg-green-800 text-white font-normal rounded-full cursor-pointer'>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
