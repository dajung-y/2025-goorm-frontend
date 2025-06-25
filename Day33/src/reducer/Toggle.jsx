import React, { useReducer } from 'react'

const toggleInit = false;

// 따로 action 객체 없어도 사용 가능
// 모달 열기/닫기, 다크모드 켜기/끄기, 사이드바 토글
function toggleReducer(state){
  return !state;
}

export default function Toggle() {
  const [on, dispatch] = useReducer(toggleReducer,toggleInit);
  // 불리언 토글 사용할 때는 굳이 함수 안만듦
  // const [inOpen, toggleModal] = useReducer(state => !state ,false);
  return (
    <div className='m-4 p-4 border'>
      <h1 className='text-2xl font-bold'>Toggle</h1>
      <button onClick={dispatch}
              className='p-2 bg-blue-400 rounded'>
        {on? '켜짐' : '꺼짐'}
      </button>
    </div>
  )
}
