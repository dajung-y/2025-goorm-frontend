import React, { useState } from 'react'

export default function Cospro4Test2() {

  const standard = [80,88,70];

  const [scores, setScores] = useState('');

  const handlePass = () => {
    const scoresArr = scores.split(' ').map(row => JSON.parse(row));
    
    console.log(scoresArr);
  };

  return (
    <section className='m-4 p-4 w-2xl bg-fuchsia-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 2</h1>
      {/* 입력 */}
      <label>점수 배열 입력</label>
      <input type='text'
             value={scores}
             onChange={e=>setScores(e.target.value)}
             placeholder='예) [80,70,65] [70,60,80]'
             className='ml-2 border rounded' />
      <button onClick={handlePass}
              className='ml-2 px-2 bg-fuchsia-400 text-white rounded cursor-pointer'>
        결과 보기
      </button>

    </section>
  )
}
