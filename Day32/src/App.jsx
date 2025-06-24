import { useRef } from "react"
import FocusInput from "./refComponents/FocusInput"
import AutoScrollChat from "./refComponents/AutoScrollChat"
import ScrollToTop from "./refComponents/ScrollToTop"
import Carousel from "./refComponents/Carousel"
import MainPage from "./pages/MainPage"
import { Route, Routes } from "react-router-dom"

function App() {

  return(
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/scrolltop" element={<ScrollToTop />} />
      <Route path="/carousel" element={<Carousel />} />
    </Routes>
  )

}

export default App

/**
useRef
- 저장 공간이나 DOM요소에 접근하기 위해 사용되는 훅
- 값은 유지하면서 리렌더링은 하지않음
- const 변수명 = useRef(초기값)
- 값을 보관할 때는 전체 주기동안
  마운트 -> 업데이터 -> 언마운트
  무한 루프 위험X

언제 사용?
- DOM요소 제어: 입력창 포커스, 스크롤 위치 측정, 조정
- 이전 값 비교: 직전 상태 비교
- 타이머ID, WebSocket/chart.js 객체 저장
 */

// let ref = useRef(0);

// // current: 처음 전달한 값
// function handleClick() {
//   ref.current += 1;
//   console.log(ref.current);
// }

// return (
//   <>
//   <h1 className="mb-4 text-2xl font-bold">useRef</h1>
//   <button onClick={handleClick}
//           className="px-4 py-2 bg-amber-200 rounded">click</button>
 
//   </>
// )