import React from 'react'
import FilterButton from './components/FilterButton'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}

/**
 실습 프로젝트 주제
 - 할일 관리 + 필터 기능 구현

 요구사항 정리
 - 할 일을 입력하고 목록에 추가할 수 있다 (추후 API 연동 예정)
 - 할 일을 완료 처리하거나 삭제할 수 있다
 - 전체/ 완료/ 미완료 상태를 버튼으로 분류해서 볼 수 있도록 한다
 - 할 일과 필터 상태는 재사용을 위해 각 slice로 분리한다
 - 필터 상태 또한 zustand로 관리
 */