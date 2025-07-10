import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import PostInput from './components/PostInput'
import PostList from './components/PostList'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import JoinPage from './pages/JoinPage'
import MyPage from './pages/MyPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route path='/mypage' element={<MyPage />} />
    </Routes>
  )
}

/**
 Zustand
 - 리액트 앱에서 사용하는 매우 가벼운 전역 상태 관리 라이브러리
 - Redux 보다 훨씬 간단하고, Provider없이 작동하며, Context도 필요 없음
 - 전역 상태를 함수 하나로 만들고 가져다 쓰는 구조
 - 저장소 하나만 만들어서 불러옴

 다른 언어들과 확장성이 쉽다
 React 성능 최적화 할 때 가장 인기있는 라이브러리
 */