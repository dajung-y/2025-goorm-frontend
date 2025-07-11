import React, { useState } from 'react'

export default function Cospro4Test5() {

  const [calories,setCalories] = useState('');
  const [consumedCalories, setConsumedCalories] = useState(null);

  const handleGetCalories =(e) => {
    e.preventDefault();
    const caloriesArr = calories.split(',')
                                .map((c) => Number(c.trim()));
    console.log(caloriesArr);
    const total = caloriesArr.reduce((acc,curr,index,arr) => {
      if(index===0) return acc;
      const extra = curr-arr[index-1];
      if(extra > 0){
        console.log(`acc: ${acc}, extra: ${extra}`);
        return acc+extra;
      } else {
        console.log(`acc: ${acc}, skip`);
        return acc;
      }
    },0);
    setConsumedCalories(total);                         
  }

  return (
    <section className='m-4 p-4 w-2xl bg-fuchsia-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 5</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <form onSubmit={handleGetCalories}>
          <label>칼로리 입력</label>
            <input type='text'
                  value={calories}
                  onChange={e=>setCalories(e.target.value)}
                  placeholder='예) 546,653,742,...'
                  className='ml-2 border rounded' />
            <button type='submit'
                    className='ml-2 px-2 bg-fuchsia-400 text-white rounded cursor-pointer'>
              확인하기
            </button>
        </form>
      </div>
      {/* 출력 */}
      <div className='mt-2'>
        { consumedCalories!== null && (
          <p>총 소모한 칼로리는 <b>{consumedCalories}</b>입니다</p>
        )}
      </div>
    </section>
  )
}
