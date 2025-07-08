import React, { useState } from 'react'

export default function Cospro3Test1() {

  const [scores,setScores] = useState('');
  const [num, setNum] = useState('');
  const [result, setResult] = useState(null);



  const getGrade = (arr,len,n) => {
    for(let i=0; i<len; i++){
      if(arr[i].index===n){
        setResult(i+1);
      }
    }
  }

  const handleGetGrade = () => {
    const stdNum = Number(num);
    const scoreArr = scores.split(',')
                          .map((s,i) => ({index:i, score:Number(s.trim())}));
  
    console.log(scoreArr);
    scoreArr.sort((a,b) => b.score-a.score);
    console.log(scoreArr);

    getGrade(scoreArr, scoreArr.length,stdNum);
  }

  return (
    <section className='m-4 p-4 w-2xl bg-rose-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 1</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>점수 입력</label>
        <input type='text'
               value={scores}
               onChange={e => setScores(e.target.value)}
               placeholder='예) 20,30,50,...'
               className='ml-2 border rounded' />
        <label className='ml-2'>학생 번호</label>
        <input type='text'
               value={num}
               onChange={e => setNum(e.target.value)}
               placeholder='학생 번호를 입력하세요'
               className='ml-2 border rounded' />
        <button onClick={handleGetGrade}
                className='ml-2 px-2 bg-rose-400 text-white rounded cursor-pointer'>
          등수 확인하기
        </button>
      </div>
      {/* 출력 */}
      { result !==null && (
        <p className='mt-4'><span className='font-bold'>{num}</span>번 학생은 <span className='font-bold'>{result}</span>등입니다</p>
      )}
    </section>
  )
}
