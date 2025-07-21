import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Cospro5Test8() {
  const [fee, setFee] = useState(null);
  const fees = {
    1: 430,
    2: 570,
    3: 840
  }
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    const usage = Number(data.usage.trim());
    let result = 0;
    const ele1 = Math.min(usage,20);
    result = usage-ele1;
    const ele2 = Math.min(result,10);
    result -=ele2;
    const ele3 = result;
    console.log(ele1, ele2, ele3);
    const total = ele1*fees["1"] + ele2*fees["2"] + ele3*fees["3"];
    setFee(total);
  }
  return (
    <section className='m-4 p-4 w-2xl bg-lime-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 8</h1>
      {/* 입력 */}
      <form onSubmit={handleSubmit(onSubmit)}
            className='mt-4'>
        <label>수도 사용량</label>
        <input {...register('usage')}
                placeholder='수도 사용량을 입력하세요'
                className='ml-2 mr-2 border rounded' />
        <button type='submit'
                className='ml-2 px-2 bg-lime-500 text-white rounded cursor-pointer'>
          요금 확인하기
        </button>
      </form>
      {/* 출력 */}
      <div className='mt-4'>
      {fee!== null && (
        <p>총 사용요금은 <b>{fee.toLocaleString()}</b>원 입니다</p>
      )}
      </div>      
    </section>
  )
}
