import React, { useState } from 'react'

export default function Cospro3Test3() {

  const [scores, setScores] = useState('');
  const [avg, setAvg] = useState(null);

  const getAvg = (arr,len) => {
    let total = 0;
    for(let i=0; i<len; i++){
      total +=arr[i];
    }
    setAvg(Math.floor(total/len));
  }

  const handleGetAvg = () => {
    const scoreArr = scores.split(',')
                            .map(s => Number(s.trim()));
    console.log(scoreArr);
    // 오름차순 정렬
    scoreArr.sort((a,b) => a-b);
    console.log(scoreArr);

    // 최대, 최소값 제거
    const midScores = scoreArr.slice(1,-1);
    console.log(midScores);

    getAvg(midScores, midScores.length);

  }

  return (
    <section className='m-4 p-4 w-2xl bg-rose-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 3</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>점수 입력</label>
        <input type='text'
               value={scores}
               onChange={e => setScores(e.target.value)}
               placeholder='예) 10,43,79, ...'
               className='ml-2 border rounded' />
        <button onClick={handleGetAvg} 
                className='ml-2 px-2 bg-rose-400 text-white rounded cursor-pointer'>
          평균값 구하기
        </button>
        {/* 출력 */}
        { avg !==null && (
                <p className='mt-4'>최대값과 최소값을 제외한 점수의 평균값은 <span className='font-bold'>{avg}</span>입니다</p>
              )}
      </div>

    </section>
  )
}
