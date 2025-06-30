import { Route, Routes } from 'react-router-dom'
import './App.css'
import Heap from './heap/Heap'
import QuickSort from './quickSort/QuickSort'
import MissionPage from './pages/MissionPage'

function App() {
  

  return (
    <Routes>
      <Route path='mission' element={<MissionPage />} />
    </Routes>
  )
}

export default App
