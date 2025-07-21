import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoginStore } from '../../stores/loginStore';

export default function LoginForm() {
  const {register,handleSubmit} = useForm();
  const {id: savedId, pw: savedPw} = useLoginStore();
  const [error, setError] = useState('');
  const [welcome, setWelcome] = useState('');
  const onSubmit =(data) => {
    if(data.id ===savedId && data.pw ===savedPw){
      setWelcome('로그인 성공');
      setError('');
    } else {
      setError('아이디 또는 비밀번호가 다릅니다');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('id')}
               placeholder='아이디를 입력하세요'/>
        <input {...register('pw')}
                type='password'
                placeholder='비밀번호를 입력하세요' />
        <button type='submit'>로그인</button>
        {error ? <p>{error}</p> : <p>{welcome}</p>}
      </form>
    </div>
  )
}
