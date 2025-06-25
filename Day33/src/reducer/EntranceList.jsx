import React, { useReducer, useState } from 'react'

export default function EntranceList() {

  // 초기 상태
  const initState = [];
  const [inputName, setInputName] = useState('');

  const reducer = (state,action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.name];
      case 'REMOVE':
        return state.filter((_,index) => index !== action.index);
    }

  };

  const [names, dispatch] = useReducer(reducer, initState);

  const handlePushName = (e) => {
    e.preventDefault();
    if(inputName){
      dispatch({
        type: 'ADD',
        name: inputName
      });
    }
    setInputName('');
  };

  return (
    <div className='flex flex-col items-center mt-4 p-4 w-120 border'>
      <h1 className='mb-4 text-2xl font-bold'>📝입장 리스트</h1>
      {/* 리스트 */}
      <div className='py-4'>
        <ul className='p-4 w-80 border'>
          {
            names.map((n,index) => (
              <li key={index}
                  className='flex justify-between p-2 border-b'>
                {n}
                <button onClick={() => dispatch({
                                          type: 'REMOVE',
                                          index: index
                                        })}
                        className='px-2 bg-red-400 text-white rounded'>
                  지우기
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      {/* 입력 form */}
      <div>
        <form onSubmit={handlePushName}>
          <input type='text'
                 value={inputName}
                 onChange={(e) => setInputName(e.target.value)}
                 placeholder='이름을 입력하세요'
                 className='p-2 border rounded'
                />
          <button className='ml-2 px-4 py-2 bg-green-400 rounded cursor-pointer'>
            작성하기
          </button>
        </form>
      </div>
    </div>
  )
}
