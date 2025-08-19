'use client'

import Button from '@/components/Button';
import React, { useState } from 'react'

export default function page() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = () => {
    if(input.trim() !== ""){
      setTodos((prev) => [...prev, input.trim()]);
      setInput("");
    }
  }
  return (
    <div className='p-8 my-8 mx-auto w-lg border-2 border-orange-500 rounded-2xl'>
      <h3 className='text-2xl text-center'>Todo</h3>
      <section className='mt-4 flex justify-center gap-4'>
        <input value={input}
               placeholder='할 일을 입력하세요'
               onChange={(e) => setInput(e.target.value)}
               className='border-2 border-orange-500 rounded' />
        <Button text={"추가"}
                onClick={handleAddTodo}
                color='orange' />
      </section>
      <section className='mt-4'>
        <ul>
          {todos.map((todo ,index) => (
            <li key={index}
                className='text-lg pb-2'>
              <input type='checkbox'
                     className='mr-2' />
              {todo}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
