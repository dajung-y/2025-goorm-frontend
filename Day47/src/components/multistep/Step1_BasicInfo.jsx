import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function Step1_BasicInfo() {
  const {register} = useFormContext();
  return (
    <div>
      <h2 className='text-xl font-bold'>기본 정보</h2>
      <div className='flex flex-col space-y-1'>
        <label>이름</label>
        <input {...register('info', {required:true})}
                className='border rounded' />
      </div>
      <div className='flex flex-col space-y-1'>
        <label>나이</label>
        <input {...register('age', {required:true})}
                className='border rounded' />
      </div>
    </div>
  )
}
