import React, { useState } from 'react'

export default function Cospro4Test1() {

  const [schedule, setSchedule] = useState('');
  const [result, setResult] = useState(null);
  const PASS = 'X';

  const handleGetSchedule = () => {
    const scheArr = schedule.split(',')
                            .map(s => s.toUpperCase());

    if(scheArr.length !==10){
      alert('10개 모두 입력해주세요');
      return ;
    }
    console.log(scheArr);

    const resultArr = [];
    // X 일때의 index 저장
    scheArr.forEach((s,i) => {
      if(s===PASS) resultArr.push(i+1);
    });

    console.log(resultArr);
    setResult(resultArr);

  }
  return (
    <section className='m-4 p-4 w-2xl bg-fuchsia-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 1</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>일정 입력</label>
        <input type='text'
               value={schedule}
               onChange={e => setSchedule(e.target.value)}
               placeholder='예) O,X,X,O,...'
               className='ml-2 border rounded' />
        <button onClick={handleGetSchedule}
                className='ml-2 px-2 bg-fuchsia-400 text-white rounded cursor-pointer'>
          확인하기
        </button>
        {/* 출력 */}
        <div className='mt-2'>
          { result!==null && (
            <p>상담을 받지 못하는 학생은 <b>{JSON.stringify(result)}</b>입니다</p>
          )}
        </div>
      </div>
    </section>
  )
}
