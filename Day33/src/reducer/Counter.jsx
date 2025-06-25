import React, { useReducer } from 'react'

// 버튼 3개를 만들어서 각각 클릭했을 때
// 각각 값들이 변경될 수 있도록 reducer 이용해서 상태관리

const initState = 0;

function reducer(state, action){
  console.log('현재 action의 type: ',action.type);
  switch (action.type){
    case 'INCREMENT':
      return state +1;
    case 'DECREMENT':
      return state -1;
    case 'RESET':
      return 0;
  }
}

export default function Counter() {
  
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className='m-4 p-4 border'>
      <h1 className='text-2xl font-bold'>Counter</h1>
      <p>Count : {count}</p>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}
              className='p-2 bg-emerald-400 rounded '>➕증가</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})}
              className='p-2 bg-red-400 rounded'>➖감소</button>
      <button onClick={()=>dispatch({type: 'RESET'})}
              className='p-2 bg-amber-200 rounded'>🔁초기화</button>
    </div>
  )
}
