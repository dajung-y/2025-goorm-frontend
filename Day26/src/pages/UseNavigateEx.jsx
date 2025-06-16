import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"

export default function UseNavigateEx() {

  const navigate = useNavigate();

  const Home = () => <h2>Home</h2>
  const Dashboard = () => <h2>Dashboard</h2>

  // 로그인 성공 조건
  const loginSuccess = true;

  const handleLogin = () => {
    if(loginSuccess){
      alert('로그인성공 대시보드로 이동');
      navigate('/dashboard');
    }
  }

  return (
    <div>
      <h1>Navigate</h1>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={handleLogin}>로그인 후 이동</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>

      <Routes>
        <Route path="/" element={<UseNavigateEx />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  )
}

/**
Navigate, nested, outlet

뒤로가기
브라우저 히스토리 스택을 기준으로 동작
뒤로 -1 window.history.back() 같은 역할
앞으로 1
새로고침 0 현재 페이지를 사로고침

 */