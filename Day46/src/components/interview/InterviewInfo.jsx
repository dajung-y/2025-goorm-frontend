import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function InterviewInfo() {

  const {register, formState: {errors}} = useFormContext();
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h1 className='mb-2 text-2xl font-bold'>기본 정보</h1>
      <div className='flex flex-col space-y-2'>
        <label>이름</label>
          <input {...register('name', {required: '이름은 필수입니다'})}
                  className='border rounded' />
      </div>
      <div className='flex flex-col space-y-2'>
        <label>나이</label>
          <input {...register('age', {required: '나이는 필수입니다'})}
                  className='border rounded' />
      </div>
    </div>
  )
}
