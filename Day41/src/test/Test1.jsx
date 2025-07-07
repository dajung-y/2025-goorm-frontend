/**
 주어진 값 : 수강 신청자들의 토익 성적이 들어있는 배열, 배열의 길이 
 출력 값 : 수강신청 가능한 사람의 인원
 수강 신청한 사람 10명 - 이 중 몇명이나 점수에 해당하는지 return
 */

 import React, { useState } from 'react'
 
 export default function Test1() {

  const [scores, setScores] = useState('');
  const [result,setResult] = useState(null);

  const handleCount = () => {
    const scoreArr = scores.split(',')
                           .map(s => Number(s.trim()))
                           .filter(s => !isNaN(s));
    console.log(scoreArr);

    const count = scoreArr.filter(score => score>=650 && score <800).length;
    setResult(count);
  }
   return (
     <div>
      <h1>초급 영어 강의</h1>
      <p>, 로 구분하여 작성</p>
      <input type='text'
             value={scores}
             onChange={e => setScores(e.target.value)}
             placeholder='예) 650,772,...' />
      <button onClick={handleCount}>
        확인
      </button>
      { result !== null && (
        <p>수강 가능한 학생 수 : {result}</p>
      )}
     </div>
   )
 }
 