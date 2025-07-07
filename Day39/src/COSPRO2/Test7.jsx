import React, { useState } from 'react'

export default function Test7() {
  const [scores, setScores] = useState([650, 722, 914, 558, 714, 803, 650, 679, 669, 800]);
  const [result,setResult] = useState(null);

  const counter = (arr, length) => {
    let count = 0;
    for(let i=0; i<length; i++){
      console.log(arr[i]);
      if(arr[i]>=650 && arr[i]<800) count ++;
    }
    console.log(count);
    setResult(count);
  }

  const handleCount = () => {
    counter(scores, scores.length);
  }
  return (
    <section className='my-4 p-8 w-2xl bg-amber-50 rounded-2xl'>
    <h1 className='text-center text-2xl font-bold'>문제 7</h1>
    <div className='p-2'>
      <h3 className='mb-2 text-xl font-bold'>수강 신청한 학생들의 점수 {JSON.stringify(scores)}</h3>
      <button onClick={handleCount}
              className='mb-2 px-2 bg-orange-400 rounded text-white cursor-pointer'>
        확인하기
      </button>
      { result !== null && (
        <p className='text-xl font-bold'>수강 가능한 학생 수 : {result}</p>
      )}
    </div>
  </section>
  )
}
