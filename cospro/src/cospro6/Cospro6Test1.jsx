import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Cospro6Test1() {
  const {register, handleSubmit} = useForm();
  const [result, setResult] = useState(null);
  const onSubmit = (data) => {
    const temps = data.temp;
    const tempArr = temps.split(',')
                          .map((temp) => Number(temp.trim()));
    const first = Number(data.firstDate);
    const last = Number(data.lastDate);
    const max = Math.max(tempArr[first], tempArr[last]);
    const count = tempArr.slice(first,last)
                         .filter(temp => temp>max).length;
    console.log(count);
    setResult(count);
  }
  return (
    <section className='m-4 p-4 w-2xl bg-teal-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 1</h1>
      {/* 입력 */}
      <form onSubmit={handleSubmit(onSubmit)}
            className='mt-4'>
        <label>온도 입력</label>
        <input {...register('temp')}
                placeholder='예) 20, 24, 30, 31'
                className='ml-2 mr-2 border rounded' />
        <input {...register('firstDate')}
                placeholder='첫 날짜를 입력하세요'
                className='ml-2 mr-2 w-35 border rounded' />
        <input {...register('lastDate')}
                placeholder='끝 날짜를 입력하세요'
                className='ml-2 mr-2 w-35 border rounded' />
        <button type='submit'
                className='ml-2 px-2 bg-teal-500 text-white rounded cursor-pointer'>
          확인
        </button>
      </form>
      {/* 출력 */}
      <div className='mt-4'>
        {result !==null && (
          <p>두 날짜 사이에서 두 날짜보다 기온이 높았던 날은 총<b>{result}</b>번 입니다</p>
        )}
      </div>
    </section>
  )
}
