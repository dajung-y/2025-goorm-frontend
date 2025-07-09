import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CosPro3Page from './pages/CosPro3Page'
import CosPro4Page from './pages/CosPro4Page'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cospro3' element={<CosPro3Page />} />
      <Route path='/cospro4' element={<CosPro4Page />} />
    </Routes>
  )
}
