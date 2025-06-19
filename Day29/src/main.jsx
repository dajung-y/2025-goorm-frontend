import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact, { contactAction } from './components/Contact.jsx'
import Comment, { commentLoader } from './components/Comment.jsx'
import KakaoLogin from './components/KakaoLogin.jsx'

// 라우터 객체 생성
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/kakao',
    element: <KakaoLogin />
  },
  {
    path: '/callback',
    element: <KakaoLogin />
  },
  // defer
  // 데이터를 미리 다 받아오지말고 필요한 것만 가져오기
  // 페이지 렌더링 속도 향상에 유리
  // 데이터 가져오는 loader 안에서 작동
  {
    path:'/comments',
    element: <Comment />,
    loader: commentLoader,
  },
  // action폼 전송시 자동으로 실행해서 이동하는 설정
  {
    path: '/contact',
    element: <Contact />,
    action: contactAction,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,

)
