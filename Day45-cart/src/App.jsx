import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
}
