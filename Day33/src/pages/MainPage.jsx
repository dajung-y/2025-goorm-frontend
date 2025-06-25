import React, { useReducer, useState } from 'react'
import Counter from '../reducer/Counter'
import Toggle from '../reducer/Toggle'
import Cart from '../reducer/Cart'
import VendingMachine from '../reducer/VendingMachine'

export default function MainPage() {



  return (
    <div>
      <Counter />
      <Toggle />
      <Cart />
      <VendingMachine />
      

    </div>
  )
}

// const initState = {
//   name: '',
//   email: '',
//   age: ''
// };

// function reducer(state, action){
//   return{
//       ...state,
//       [action.field] : action.value
//   };
// }


//   // 어떤 입력창이든 onChange 이벤트가 발생하면 상태를 업데이트하는 함수
//   // dispatch : 해당 필드를 업데이트하도록 액션 전달
//   // form : 지금 입력중인 모든 값을 담고있는 객체
//   const [form,dispatch] = useReducer(reducer,initState);

//   const handleChange =(e) => {
//     dispatch({
//       field: e.target.name, // 태그 구별하는 name 속성
//       value: e.target.value // 실제 사용자가 입력한 값
//     })
//     console.log('이벤트발생 태그: ',e.target.name);
//   }

//   <h1>useReducer</h1>
//   <input name='name' 
//          type='text'
//          placeholder='이름 입력'
//          onChange={handleChange} />
//   <input name='email'
//          type='text'
//          placeholder='이메일 입력'
//          onChange={handleChange} />
//   <input name='age'
//          type='text'
//          placeholder='나이 입력'
//          onChange={handleChange} />