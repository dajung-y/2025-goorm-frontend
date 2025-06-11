import React from 'react'
// 추가적으로 라이브러리 받았을 때 자동완성 안되면 경로 맞는지 잘 확인
// {필요한 도구만 꺼내오기}
import { useForm } from 'react-hook-form'

export default function ReactHookFormEx() {

  // 유효성 검사할 떄 form 구조
  const {
    register, // input 필드를 Hook Form에 등록
    handleSubmit, // 폼 제출시 유효성 검사 자동 수행
    formState : {errors}, // 필드별 에러 메시지 담고 있는 객체
  } = useForm();

  // 폼 제출되었을 때 실행할 함수
  const onSubmit = (data) => {
    alert(`${data} - 제출됨`);
  }

  return (
    <div>
      {/* 이 폼이 제출되면 handleSubmit() 함수 실행 */}
      <form onSubmit={handleSubmit()}>
        {/* username 필드 등록 + 필수조건 설정 */}
        <input
        {
          ...register(
            'username', 
            {required: '이름 입력은 필수입니다'}
          )
        }
        placeholder='이름입력'/>
        <p style={{color: 'red'}}>{errors.username?.message}</p>
        <input type='submit' value='제출' />
      </form>
    </div>
  )
}
