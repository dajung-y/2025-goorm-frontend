import React, { useState } from 'react'

export default function Cospro4Test4() {

  // 각 반에 필요한 조교의 수 구하기
  const [input, setInput] = useState('');
  const FULL = 30;
  const [result, setResult] = useState(null);

  const handleGetAssistant = () => {
    let count = 0;
    const studentsArr = input.split(',')
                             .map(s => Number(s.trim()));
    console.log(studentsArr);

    studentsArr.forEach((s) => {
      count += Math.ceil(s/FULL);
    })
    setResult(count);
  }

  return (
    <section className='m-4 p-4 w-2xl bg-fuchsia-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 4</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>학생수 입력</label>
        <input type='text'
              value={input}
              onChange={e=>setInput(e.target.value)}
              placeholder='예) 80,40,34,10'
              className='ml-2 border rounded' />
        <button onClick={handleGetAssistant}
                className='ml-2 px-2 bg-fuchsia-400 text-white rounded cursor-pointer'>
          확인하기
        </button>
      </div>
      {/* 출력 */}
      <div className='mt-2'>
        {result!==null && (
          <p>총 필요한 조교는 <b>{result}</b>명 입니다</p>
        )}
      </div>


    </section>
  )
}
