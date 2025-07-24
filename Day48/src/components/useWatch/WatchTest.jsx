import React from 'react'
import { useForm } from 'react-hook-form'

export default function WatchTest() {
  const {register, watch} = useForm();
  const text = watch('text');
  console.log('컴포넌트 전체 리렌더');
  return (
    <div>
      <input {...register('text')} />
      <p>입력 값: {text}</p>
    </div>
  )
}
