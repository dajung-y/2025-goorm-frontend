import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function Step3_Introduction() {
  const {register} = useFormContext();
  return (
    <section>
      <h2 className='mb-2 text-xl font-bold'>자기소개</h2>
      <div>
        <textarea {...register('introduction', {required:true})}
                  className='w-full border border-gray-400 rounded'
                  placeholder='간단한 자기소개를 작성해주세요' />
      </div>
    </section>
  )
}
