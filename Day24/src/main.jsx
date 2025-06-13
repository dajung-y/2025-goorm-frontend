import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 부트스트랩 css
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
