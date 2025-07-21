import React from 'react'
import Counter from './components/Counter'
import UserForm from './components/user/UserForm'
import UserDisplay from './components/user/UserDisplay'
import ToggleMessage from './components/missions/ToggleMessage'
import LoginForm from './components/missions/LoginForm'
import TodoForm from './components/missions/TodoForm'

export default function App() {
  return (
    <div>
      <ToggleMessage />
      <LoginForm />
      <TodoForm />
    </div>
  )
}

/**
 리액트 테스트
 - 리액트 컴포넌트나 기능들이 제대로 동작하는지 자동으로 확인해주는 과정
 - 사용자가 버튼을 클릭했을 때 화면이 바뀌거나 데이터가 저장되는 등의 과정들의 동작이 원하는 대로 작동하는 코드인지 확인하는 과정

 - 사람이 직접 브라우저에서 모든 기능을 하나하나 눌러보기에는 시간이 너무 오래걸림
 - 팀 프로젝트나 유지보수가 많은 경우 누군가 코드를 바꾸면 어디가 망가졌는지 모르고 배포될 수 있음

 실제 테스트를 자동으로 도와주는 라이브러리
 - RTL (React Testing Library)
   리액트에서 표준 테스트 도구로 가장 널리 사용되는 라이브러리
 - Jest
 - MSW (Mock Service Worker) 
   가짜 API응답을 만들어서 테스트하게 도와줌

 유닛(Unit)테스트, 통합(Integration)테스트, 엔드투엔드(end-to-end E2E)
 - 유닛 테스트
   가장 작은 단위의 로직 (함수, 컴포넌트 등)독립적으로 테스트

 - 통합 테스트
   여러 유닛이 함께 작동하는 흐름을 테스트 (컴포넌트, 상태관리, API)
   여러 기능이 함께 작동할 때 연결이 잘 되는지 확인
  
 vite 프로젝트로 테스트할 때
 vitest
 npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
 */