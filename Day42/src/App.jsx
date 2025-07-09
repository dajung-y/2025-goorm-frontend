import React from 'react'
import ReduxBasic from './redux/ReduxBasic'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div>
      {/* <ReduxBasic />  */}
      <TodoInput />
      <TodoList />
    </div>
  )
}

/**
 개발 전 계획을 세우기 위해 나오는 단어
 DDD vs CBD
 DDD(Domain Driven Design)
 - 업무(도메인)를 중심으로 시스템을 설계하는 것
 - 복잡한 B2B 서비스, 금융, 보험, ERP 에서 많이 사용됨
 - NestJS, Springboot 등 백엔드 쪽에ㅓ 설계할 때 사용하는 기법

 CBD(Component Based Development)
 - 컴포넌트 기반 개발
 - 부품처럼 조립 가능한 컴포넌트 단위로 개발하는 기법
 - 기능 뿐만 아니라 UI, 서비스 기능, API 단위도 컴포넌트처럼 나눌 수 있다

 컴포넌트 이름      ex) UserProfile
 컴포넌트 설명      ex) 사용자의 이름과 프로필 이미지를 표시하며, 클릭 시 상세 페이지로 이동
 컴포넌트 주요 기능  ex) 프로필 이미지 출력, 사용자 이름 출력
 props 정의       ex) name: string - 필수 여부

 버전관리
 - 어떤 파일이나 기능, 문서가 몇 번째 수정인지 기록


 */