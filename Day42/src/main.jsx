import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
// import { store } from './redux/ReduxBasic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 리액트 앱과 JS객체 연결 */}
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>,
)
