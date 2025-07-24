import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CosPro3Page from './pages/CosPro3Page'
import CosPro4Page from './pages/CosPro4Page'
import CosPro5Page from './pages/CosPro5Page'
import CosPro6Page from './pages/CosPro6Page'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cospro3' element={<CosPro3Page />} />
      <Route path='/cospro4' element={<CosPro4Page />} />
      <Route path='/cospro5' element={<CosPro5Page />} />
      <Route path='/cospro6' element={<CosPro6Page />} />
    </Routes>
  )
}
