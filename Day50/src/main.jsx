import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'

// 리액트 쿼리 프로젝트 전역에서 사용할 수 있도록 전역 설정하는 것
// 리액트 쿼리는 모든 동작을 중앙에서 관리
// QueryClient
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* 개발 도구 : 처음은 닫힌 상태로 시작 */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)

// 서로 독립적이라 순서 상관없지만 일반적으로
// <BrowserRouter> 안에 각종 전역 Provider