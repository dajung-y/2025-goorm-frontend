'use client'

import React, { useState } from 'react'

export default function page() {
  function add(a: number, b: number): number{
    return a+b;
  }

  const [msg, setMsg] = useState<string>("아직 클릭되지 않음");

  function increment(){
    setMsg("버튼이 클릭됨");
  }

  const result = add(10,5);
  return (
    <div>
      <h1>함수</h1>
      <p>10 + 5 = {result}</p>
      <h3>이벤트 함수</h3>
      <button onClick={() => {alert("클릭")}}>클릭</button>
      <hr />
      <h3>숫자 증가</h3>
      <button onClick={increment}
              className='border rounded'>
        증가
      </button>
      <p>{msg}</p>
    </div>
  )
}
