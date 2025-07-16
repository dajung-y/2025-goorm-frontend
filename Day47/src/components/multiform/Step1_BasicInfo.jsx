import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function Step1_BasicInfo() {

  const {register} = useFormContext();
  return (
    <section>
      <h2 className='mb-2 text-xl font-bold'>기본 정보</h2>
      <div className='flex flex-col space-y-2'>
        <div>
          <label className='block'>이름</label>
          <input {...register('name', {required:true})}
                  className='border border-gray-400 rounded' />
        </div>
        <div>
          <label className='block'>학년</label>
          <input {...register('grade', {required:true})}
                  className='border border-gray-400 rounded' />
        </div>
        <div>
          <label className='block'>연락처</label>
          <input {...register('phone', {required:true})}
                  className='border border-gray-400 rounded' />
        </div>
      </div>
    </section>
  )
}
