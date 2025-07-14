import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function InterviewIntro() {
  const {register, formState: {errors}} = useFormContext();
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h1 className='mb-2 text-2xl font-bold'>자기 소개</h1>
      <div className='flex flex-col space-y-2'>
        <textarea {...register('introduce', {required: '자기소개는 필수입니다'})}
                  placeholder='간단한 자기소개를 작성해주세요'
                  className='border rounded'/>
      </div>
    </div>
  )
}
