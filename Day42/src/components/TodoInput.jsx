import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';


// todos 입력 UI
// 입력 상태 관리 -> 유효성 검사 -> 액션 디스패치 -> 상태 초기화
export default function TodoInput() {

  const [text, setText] = useState('');

  // 액션을 스토어에 보내는 역할
  // 상태 변경하거나 비동기 호출할 때 사용
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(text.trim()==="") return;

    // 액션에게 현재 입력값을 넘겨 호출하고
    // 그 결과로 만들어진 액션 객체를 redux store에 dispatch
    // { type: todos/addTodo, }
    dispatch(addTodo(text))
    setText('');
  }
  return (
    <div>
      <h1>할 일 목록</h1>
      <input type='text'
             value={text}
             onChange={e => setText(e.target.value)}
             placeholder='할 일을 입력하세요' />
      <button onClick={handleAdd}>
        할 일 추가
      </button>
    </div>
  )
}
