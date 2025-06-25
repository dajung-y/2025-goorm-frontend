// 자판기 예제

import React, { act, useReducer } from 'react'

export default function VendingMachine() {

  // 처음 음료 개수
  const initState = 0;

  // reducer 함수 : 자판기 작동 메뉴얼
  function reducer(state, action){
    // state: 현재 음료 개수
    // action: 사용자가 누른 버튼(어떤 것을 할지 지시사항)
    switch (action.type){
      case 'ADD': // 음료 추가 버튼
        return state + 1;
      case 'REMOVE': // 음료 빼기 버튼
        if(state>0){
          return state - 1;
        }
      case 'RESET': // 음료 초기화
        return 0;
    }
  }

  // useReducer 사용 (자판기)
  const [count, dispatch] = useReducer(reducer, initState);
  // count : 현재 상태 (지금 자판기에 있는 음료 개수)
  // dispatch : 자판기 버튼 누르는 함수
  // reducer : 자판기 작동 매뉴얼
  // initState : 처음 시작할 때 음료 개수
  return (
    <div className='m-4 p-4 flex flex-col text-center bg-amber-100 rounded'>
      <h1 className='my-4 text-2xl font-bold'>자판기</h1>
      <div className='flex justify-center gap-4 my-4'>
        <button onClick={() => dispatch({type: 'ADD'})}
                className='p-2 bg-white font-bold rounded'>
          추가하기
        </button>
        <button onClick={() => dispatch({type: 'REMOVE'})}
                className='p-2 bg-white font-bold rounded'>
          제거하기
        </button>
        <button onClick={() => dispatch({type:'RESET'})}
                className='p-2 bg-white font-bold rounded'>
          되돌리기
        </button>
      </div>
      <p className='font-bold'>뽑을 음료수 개수 : {count}</p>
    </div>
  )
}
