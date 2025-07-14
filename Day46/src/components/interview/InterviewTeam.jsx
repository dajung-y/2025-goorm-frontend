import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function InterviewInfo() {

  const {register, formState: {errors}} = useFormContext();
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h1 className='mb-2 text-2xl font-bold'>희망 부서</h1>
      <div className='flex flex-col space-y-2'>
        <label>부서</label>
        <select {...register('team', {required:'부서 선택은 필수입니다'})}
                className='border rounded'>
          <option value="">부서 선택</option>
          <option value="front">프론트엔드팀</option>
          <option value="back">백엔드팀</option>
          <option value="server">서버팀</option>
        </select>
      </div>
    </div>
  )
}
