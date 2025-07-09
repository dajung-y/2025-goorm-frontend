import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

export default function TodoInput() {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(input.trim()==="") return;

    // 액션 객체 생성 {type: todos/addTodo, payload: input}
    // dispatch로 store에 전달
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <section className='flex justify-center my-4 '>
      <div className='flex justify-center gap-2 py-4'>
        <input type='text'
               value={input}
               onChange={e=>setInput(e.target.value)}
               placeholder='할 일을 입력하세요'
               className='p-2 w-3xl border-2 border-green-800 rounded-xl' />
        <button onClick={handleAddTodo}
                className='px-4 py-2 bg-green-800 text-white font-semibold rounded-xl cursor-pointer'>
          등록하기
        </button>

      </div>

    </section>
  )
}
