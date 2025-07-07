import React, { useState } from 'react'

export default function Test3() {

  const days = [31,28,31,30,31,30,31,31,30,31,30,31];
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div>
      <p>시작 날짜와 끝 날짜 사이의 날짜 구하기 </p>
      <label>시작날짜</label>
      <input type='text'
             value={start}
             onChange={setStart(e.target.value)}
             placeholder='예) 1/30' />
      <input type='text'
             value={end}
             onChange={e => setEnd(e.target.value)}
             placeholder='예) 1/30' />

    </div>
  )
}
