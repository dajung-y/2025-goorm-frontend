import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

/**
 동적 프로그래밍 (Dynamic Programing)
 - 중복 부분 문제와 최적 부분 구조를 가지는 문제를 해결
 - 작은 문제부터 차례대로 풀어서 그 결과를 저장 (메모이제이션, 테이블 채우기)
 - 이후 같은 문제가 다시 필요할 때 저장된 값을 활용해 불필요한 연산을 제거하는 기법
 - 재귀적으로 계속 호출하면 심한 중복 일어남
 - 리액트에서는 성능 최적화, 캐싱, 데이터 처리 최적화
   useMemo, useCallback, React Query
 - 백엔드와의 통신에서는 중복 요청을 줄이거나 결과 재활용하는 개념

 장점
 - 속도를 극적으로 향상시킬 수 있음

 단점
 - 더 느려질 수도 있음
 */