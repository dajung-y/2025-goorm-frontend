import React, { useReducer } from 'react'

const cartInitState = [];

function cartReducer(state,action){
  switch(action.type){
    case 'ADD':
      return [...state,action.item];
    case 'REMOVE':
      // 배열에서 삭제할 것만 삭제하고 나머지 남겨두기
      return state.filter((__,index) => index !==action.index);
  }
}
export default function Cart() {

  const [cart,dispatch] = useReducer(cartReducer,cartInitState);
  return (
    <div className='m-4 p-4 border'>
      <h1 className='text-2xl font-bold'>Cart</h1>

      <button onClick={() => dispatch({ 
                                        type: 'ADD',
                                        item: '👓안경'
                                      })}
              className='p-2 border border-purple-400 rounded'>
      안경추가
      </button>
      <button onClick={() => dispatch({ 
                                        type: 'ADD',
                                        item: '🕶️선글라스'
                                      })}
              className='p-2 border border-purple-400 rounded'>
      선글라스추가
      </button>
      <h2>장바구니 목록</h2>
      <ul>
        {
          cart.map((item,index) => (
            <li>
              {item}
              <button onClick={() => dispatch({
                                                type: 'REMOVE',
                                                index: index
                                              })}
                      className='p-2 bg-purple-400 rounded'>
                제거
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
