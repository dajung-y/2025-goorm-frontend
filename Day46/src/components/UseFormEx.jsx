import React from 'react'
import { useForm } from 'react-hook-form'

export default function UseFormEx() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  // register : input을 폼에 등록하는 함수
  //            리액트 훔 폼과 input을 연결
  // handleSubmit : 폼 제출 이벤트를 감싸서 검증 -> 제출 함수 실행 흐름으로 바꿔줌

  //  폼이 성공적으로 제출되면 실행되는 함수
  // data는 사용자가 입력한 모든 값이 담긴 객체로 들어옴
  const onSubmit = (data) => {
    console.log(data);
  }

  // <form onSubmit={handleSubmit(onSubmit)}>
  // 1. 입력값 검증
  // 2. 문제 없으면 onSubmit()함수 실행

  // register('username',{required: true})
  // 'username'이라는 이름의 input을 폼에 등록
  // required: true -> 필수 입력 조건
  //  {...register} input에 등록하면 value, onChange, ref 자동으로 처리

  // 실행 순서
  // 1. input을 register()로 연결
  // 2. 제출시 handleSubmit()이 실행되고 입력값 검사
  // 3. 조건이 맞으면 onSubmit 실행, 아니면 errors에 정보 저장

  return (
    <div>
      <h3>useForm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {
          ...register('username',{required: true})
        } 
        placeholder='이름'/>
        {errors.username && <span>이름은 필수입니다</span>}
        <input type='password' {
          ...register('password', {required: '비밀번호는 필수입니다'})
          // required옵션에 문자열 : 해당 필드가 비어있을 때 문자열로 작성한 에러 메시지
        } />
        {/* 위 비밀번호랑 확인하는 경우 */}
        <input type='submit' />
      </form>
    </div>
  )
}


/**
 React Hook Form vs React Form
 */