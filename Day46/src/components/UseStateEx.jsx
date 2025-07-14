import React, { useState } from 'react'

export default function UseStateEx() {

  const [username,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h3>useState 방식</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'
               value={username}
               onChange={e=>setUserName(e.target.value)} />
        <input type='text'
               value={email}
               onChange={e=>setEmail(e.target.value)} />
        <input type='text'
               value={address}
               onChange={e=>setAddress(e.target.value)} />
        <button type='submit'>입력</button>
      </form>
    </div>
  )
}

/**
 일반 form 사용할 때 문제점
 - state가 너무 많음
   여러가지 필드를 더 입력받을 때는 더 많은 상태가 나옴
 - 예외처리를 각각 따로 작성해야함
 - 재사용이 어려움
 - 컴포넌트 리랜더링이 많아져서 성능이 떨어짐
 - 유효성 검사를 직접 구현하면 코드가 장황해지고 유지보수가 어려움
 - 복잡한 구조에서는 버그 발생 확률이 커짐
 */
