import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CosProPage from './pages/CosProPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cospro' element={<CosProPage />} />
    </Routes>
  )
}
