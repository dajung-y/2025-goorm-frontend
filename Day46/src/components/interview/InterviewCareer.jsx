import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function InterviewCareer() {

  const {register, formState: {errors}} = useFormContext();
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h1 className='mb-2 text-2xl font-bold'>경력 유무</h1>
      <div className='flex flex-col space-y-2'>
        <label>
          <input type='radio'
                value='yes'
                {...register('career', {required: '경력 선택은 필수입니다'})} />
          있음
        </label>
        <label>
          <input type='radio'
                value='no'
                {...register('career', {required: '경력 선택은 필수입니다'})} />
          없음
        </label>
      </div>
    </div>
  )
}
