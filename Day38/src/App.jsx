import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import PasswordHint from "./missions/PasswordHint"
import PopularProduct from "./missions/PopularProduct"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="password" element={<PasswordHint />} />
      <Route path="/popular" element={<PopularProduct />} />
    </Routes>
  )
}

export default App

/**
 최적화 할 때 고려할 알고리즘 복잡도 순서
 O(1) -> O(log n) -> O(n) -> O(n log n) -> O(n^2) -> O(2n) -> O(n!)
 상수는 무시되어 단순하게 표시
 O(n+10) -> O(n)
 O(1000n + 50) -> O(n)
 */

 /**
  공간 복잡도
  - 코드가 얼마나 많은 메모리를 사용하는지 측정하는 방법

  시간 복잡도와 공간 복잡도
  시간 복잡도는 코드의 속도를 측정하고 공간 복잡도는 코드의 메모리 사용량을 측정
  시간 복잡도는 최악의 경우 모든 데이터를 끝까지 확인하기때문에 빅오 O(n)
  공간 복잡도는 추가 메모리 사용하지 않고 단 하나의 변수만 사용하기 때문에 O(1)
  */

