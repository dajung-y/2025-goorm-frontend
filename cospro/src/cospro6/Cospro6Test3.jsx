import React from 'react'
import { useForm } from 'react-hook-form';

export default function Cospro6Test3() {
  const {register,handleSubmit} = useForm();
  const measure = (size) => {
    if(size<95) return 'S';
    if(size<100) return 'M';
    if(size<105) return 'L';
    return 'XL';
  }
  const onSubmit = (data) => {
    const size = data.size;
    const sizeArr = size.split(',')
                         .map(size => Number(size.trim()))
                         .map(measure)
    console.log(sizeArr);                     
  
  }
  return (
    <section className='m-4 p-4 w-2xl bg-teal-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 3</h1>
      {/* 입력 */}
      <form onSubmit={handleSubmit(onSubmit)}
            className='mt-4'>
        <label>사이즈 입력</label>
        <input {...register('size')}
                placeholder='예) 95,100,103'
                className='ml-2 mr-2 border rounded' />
        <button type='submit'
                className='ml-2 px-2 bg-teal-500 text-white rounded cursor-pointer'>
          확인
        </button>
      </form>
    </section>
  )
}
