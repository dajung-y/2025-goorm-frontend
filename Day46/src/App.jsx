import React from 'react'
import UseFormEx2 from './components/UseFormEx2'
import UseFormEx3 from './components/UseFormEx3'
import InterviewForm from './components/interview/InterviewForm'

export default function App() {
  return (
    <div>
      <InterviewForm />
    </div>
  )
}

/**
 React Hook Form
 - 폼 상태 관리와 유효성 검사를 간단하게 처리할 수 있도록 도와주는 라이브러리
 - 불필요한 리랜더링을 줄이고 최소한의 코드로 폼을 구현할 수 있도록 설계됨
 - npm install react-hook-form

 사용하는 경우
 - 복잡한 폼이 필요한 경우
   다양한 입력 필드와 복잡한 유효성 검사가 필요한 폼
 - 성능이 중요한 경우
   대규모 폼에서 성능 최적화 필요한 경우
 - 외부 UI 라이브러리와 통합이 필요한 경우
 - 회원가입 및 로그인 폼
 - 설문조사 및 피드백 폼
 - 대시보드 설정 폼
 */

