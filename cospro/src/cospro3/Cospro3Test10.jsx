import React, { useState } from 'react'

export default function Cospro3Test10() {

  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState(null);

  const getHalf = (arr, len) => {
    const halfArr = arr.map(s => s/2);
    console.log(`원본 배열: ${arr}`);
    console.log(`나눠진 배열: ${halfArr}`);
    const count = arr.filter(e => halfArr.includes(e)).length;

    setResult(count);
  }

  const handleGetHalf = () => {
    const numArr = numbers.split(',')
                          .map(s => Number(s.trim()));
    getHalf(numArr,numArr.length);
  }
  return (
    <section className='m-4 p-4 w-2xl bg-rose-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 10</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>숫자 입력</label>
        <input type='text'
              value={numbers}
              onChange={e => setNumbers(e.target.value)}
              placeholder='예) 4,7,12,...'
              className='ml-2 border rounded' />
        <button onClick={handleGetHalf}
                className='ml-2 px-2 bg-rose-400 text-white rounded cursor-pointer'>
          확인하기
        </button>
      </div>
      {/* 출력 */}
      { result!==null && (
        <p className='mt-2'>총 {result}개 입니다</p>
      )}
    </section>
  )
}
