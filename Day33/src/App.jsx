import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Page from "./pagination/Page"
import MissionPage from "./pages/MissionPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="page" element={<Page />} />
      <Route path="mission" element={<MissionPage />} />
    </Routes>
  )
}

export default App

/**
useReducer
: 상태(state)를 업데이트 하는 로직이 복잡하거나 상태값이 많고 그 값들간의 관계가 있을 때 사용하는 리액트 훅
 - 로그인, 회원가입 폼 등에서 여러 필드 관리해야할 때 사용
 - 장바구니 로직
 
useState 간단한 값 하나 바꿀 때 사용
useReducer 상태 변경 조건이 많을 때 사용 
 */