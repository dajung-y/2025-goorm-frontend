import React, { useEffect, useReducer } from 'react'

export default function Timer() {

  // 초기 상태
  const initState = {
    seconds: 0,
    isRunning: false,
  }

  // reducer은 state,isRunnging 상태만 관리
  function reducer(state, action) {
    switch (action.type){
      case 'START':
        return{
        ...state,
          isRunning: true,
        }
      case 'STOP':
        return{
          ...state,
          isRunning: false,
        }
      case 'RESET':
        return initState;
        // interval로 증가되는 시간
      case 'COUNT':
        return{
          ...state,
          seconds: state.seconds +1
        }
    }
  }

  // 사용전 선언 
  const [counter, dispatch] = useReducer(reducer, initState);

  
  useEffect(() => {
    let timer;
    // isRunning인 경우 타이머 작동
    if(counter.isRunning === true){
      timer = setInterval(() => {
        // state 직접 수정X, dispatch로 상태 변경
        dispatch({type: 'COUNT'})
      },1000);
    }
    // 값 false로 변경되면 (언마운트 시) 중단
    return () => clearInterval(timer);
  },[counter.isRunning]);
  

  return (
    <div className='flex flex-col items-center mt-4 p-4 w-120 border'>
      <h1 className='pb-4 text-2xl font-bold'>⏱️ 타이머</h1>
        {/* 타이머 본체 */}
        <div className='flex items-center justify-center w-100 h-100 bg-blue-100 rounded-full'>
          <div>
            <h1 className='text-3xl font-bold'>{counter.seconds}</h1>
          </div>
        </div>
        {/* 버튼 컨테이너 */}
        <div className='flex justify-between gap-8 mx-8 my-4'>
          <button onClick={() => dispatch({type: 'START'})}
                  className='px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100'>
            시작
          </button>
          <button onClick={() => dispatch({type: 'STOP'})}
                  className='px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100'>
            정지
          </button>
          <button onClick={() => dispatch({type: 'RESET'})}
                  className='px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100'>
            재설정
          </button>
        </div>
    </div>
  )
}
