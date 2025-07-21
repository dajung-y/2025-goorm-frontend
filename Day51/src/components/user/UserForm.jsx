import React from 'react'
import { uesUserStore } from '../../stores/userStore'
import { useForm } from 'react-hook-form';

export default function UserForm() {
  const {register,handleSubmit} = useForm();
  const setName = uesUserStore((state) => state.setName);
  const onSubmit = (data) => {
    setName(data.name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="이름을 입력하세요" />
        <button type="submit">확인</button>
      </form>
    </div>
  )
}
