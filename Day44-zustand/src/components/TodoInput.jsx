import React, { useState } from 'react'
import { useTodoStore } from '../app/todoStore';

export default function TodoInput() {

  const [inputValue, setInputValue] = useState('');

  // todoStore.js 안에서 useTodoStore 변수 안에 있는 함수 꺼내옴

  const createTodo = useTodoStore((state) => state.createTodo);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputValue.trim()) return;

    createTodo(inputValue); // 바로 저장소로 보냄
    setInputValue('');
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}
