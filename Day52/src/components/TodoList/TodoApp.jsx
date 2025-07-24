import React, { useState } from 'react'
import TaskInputWithSearch from './TaskInputWithSearch';

export default function TodoApp() {
  // 전체 목록
  const [todos, setTodos] = useState([]);
  // 화면에 보여줄 목록
  const [display, setDisplay] = useState([]);

  const handleAddTask = (text) => {
    const next = [...todos, {id: Date.now(), text, done:false}];
    setTodos(next);
    setDisplay(next);
    console.log('할일추가');
  }

  const handleSearch = () => {
    console.log('찾기');
  }

  // 토글
  const handleToggle = (id) => {
    const toggleTodos = todos.map(todo =>
      todo.id===id ? {...todo, done: !todo.done} : todo
    )
    setTodos(toggleTodos);
    setDisplay(toggleTodos);
  }
  return (
    <div>
      <TaskInputWithSearch 
        onAddTask={handleAddTask}
        onSearch={handleSearch} />
        {/* todo list */}
        <div>
          <ul className='grid grid-cols-4 gap-8 mt-6'>
            {display.map(todo => (
              <li key={todo.id}
                  className={`flex flex-col justify-center text-center p-4 rounded mb-4 
                              ${todo.done ? 'bg-gray-100' : 'bg-rose-100'}`}>
                {todo.text}
                <button onClick={()=> handleToggle(todo.id)}
                        className={`mt-4 py-1 rounded text-white font-bold cursor-pointer
                        ${todo.done ? 'bg-gray-400' : 'bg-rose-400'}`}>
                  {todo.done ? '취소' : '완료'}
                </button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
