import React, { useState } from 'react'

export default function Cospro6Test8() {
  const [num, setNum] = useState('');
  const [result ,setResult] = useState(null);
  const handleGetResult = () => {
    const reverse = Number(num.split('').reverse().join(''));
    const n = Number(num);
    console.log(n, reverse);
    setResult(n-reverse);
  }
  return (
    <section className='m-4 p-4 w-2xl bg-teal-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 8</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>숫자 입력</label>
        <input value={num}
                onChange={(e) => setNum(e.target.value)}
                placeholder='숫자를 입력하세요'
                className='ml-2 mr-2 border rounded' />
        <button onClick={handleGetResult}
                className='ml-2 px-2 bg-teal-500 text-white rounded cursor-pointer'>
          값 구하기
        </button>
        <div className='mt-4'>
          {result!==null && (
            <p>주어진 숫자에서 뒤집은 숫자를 뺀 값은 <b>{result}</b>입니다</p>
          )}
        </div>
      </div>
    </section>
  )
}
