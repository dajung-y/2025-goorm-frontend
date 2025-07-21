import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Cospro5Test7() {
  const [result, setResult] = useState(null);
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    const items = data.items;
    const itemsArr = items.split(',')
                          .map((item) => Number(item.trim()));
    // 일반,소량 분리 
    const standardCheckoutDuration = itemsArr.filter((item) => item>3)
                                             .reduce((acc,curr) => acc+curr,0);
    const expressCheckoutDuration = itemsArr.filter((item) => item<=3)
                                            .reduce((acc,curr)=> acc+curr,0);
    const takeTime = Math.max(standardCheckoutDuration,expressCheckoutDuration);
    setResult(takeTime);                                      
  }
  return (
    <section className='m-4 p-4 w-2xl bg-lime-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 7</h1>
      {/* 입력 */}
      <form onSubmit={handleSubmit(onSubmit)}
            className='mt-4'>
        <label>물건 개수 입력</label>
        <input {...register('items')}
                placeholder='예) 5,2,7'
                className='ml-2 mr-2 border rounded' />
        <button type='submit'
                className='ml-2 px-2 bg-lime-500 text-white rounded cursor-pointer'>
          시간 확인하기
        </button>
      </form>
      {/* 출력 */}
      <div className='mt-4'>
        {result!== null && (
          <p>걸린 시간은 <b>{result}</b>입니다</p>
        )}
      </div>
    </section>
  )
}





// 물건 3개 이하면 소량
// 3개 초과면 일반
// 모든 물건은 1개당 1분