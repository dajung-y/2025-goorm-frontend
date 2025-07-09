import React, { useState } from 'react'

export default function Cospro3Test9() {

  const [day, setDay] = useState('');
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState(null);

  const counter = (arr, len, d) => {
    let count = 0;
    // 짝수 날짜인 경우
    if(d%2===0){
      for(let i=0; i<len;i++){
        if(arr[i]%2===0) count++;
      }
    } else {
      for(let i=0; i<len; i++){
        if(arr[i]%2!==0) count++;
      }
    }
    setResult(count);
  }

  const handleCount = () => {
    if(!day) {
      alert('날짜를 입력하세요');
      return;
    }
    const numArr = numbers.split(',')
                          .map(s=> Number(s.trim()));
    const nDay = Number(day);
    counter(numArr, numArr.length, nDay);
  }

  return (
    <section className='m-4 p-4 w-2xl bg-rose-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 9</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>날짜 입력</label>
        <input type='text'
              value={day}
              onChange={e => setDay(e.target.value)}
              placeholder='날짜를 입력하세요'
              className='ml-2 border rounded' />
        <label className='ml-2'>차량번호 입력</label>
        <input type='text'
              value={numbers}
              onChange={e => setNumbers(e.target.value)}
              placeholder='예) 1234,5678,2025,...'
              className='ml-2 border rounded' />
        <button onClick={handleCount}
                className='ml-2 px-2 bg-rose-400 text-white rounded cursor-pointer'>
          확인하기
        </button>
      </div>
      {/* 출력 */}
      { result!==null && (
        <p className='mt-2'>주차장에는 <b>{result}</b>대 들어올 수 있습니다</p>
      )}
    </section>
  )
}
