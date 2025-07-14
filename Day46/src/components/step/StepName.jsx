import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function StepName() {

  const {
    register,
    watch, // 실시간 입력값 확인
    formState: {errors},
  } = useFormContext();

  // name 필드 실시간으로 감시
  const name = watch('name');

  return (
    <div>
      {name && <p>{name}님 반갑습니다!</p>}
      <label>이름</label>
      <input {...register('name',{required:'이름은 필수입니다'})} />
      {errors.name && <span>{errors.name.message}</span>}
    </div>
  )
}
