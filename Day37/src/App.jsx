import { useState } from "react"
import On from "./components/On"
import On2 from "./components/On2"
import TimeComplextiy from "./components/TimeComplextiy"
import Example from "./components/Example"

function App() {

  return(
    <>
      {/* <On /> */}
      {/* <On2 /> */}
      {/* <TimeComplextiy /> */}
      <Example />
    </>
  )
}

export default App

/**
 Big-O 표기법
 - 코드, 데이터가 커지면 얼마나 느려지는지, 어떻게 하면 더 빠르게 바꿀 수 있는지 힌트 주는 것
 - 알고리즘이 입력크기(n)에 따라서 얼마나 빠르거나 느려지는지 수학적으로 표현하는 방법
 - 코드의 실행시간 또는 메모리 사용량이 입력 크기가 커질 수록 어떻게 증가하는지 알려주는 지표

 - O
   Order of 줄임말
   어떤 알고리즘의 성장 속도(복잡도)가 어떻게 증가하느냐

 빅오 표기법
 - O(1) : 한번만 실행
 */

//  // O(1) 상태 관리
//  const [user,setUser] = useState({isLoggedIn: false})

//  // O(1) 다크 모드
//  const [isDark, setIsDart] = useState(false);

//  const toggleTheme = () => {
//    setIsDart(!isDark);
//  }
//  return (
//    <>
//      <h4>O(1)예제 - 빠르게 처리되는 코드</h4>
//      {/* O(1) 로그인 상태를 체크
//          값을 이용해서 삼항연산자로 빠르게 표현 */}
//      <p>
//        상태 : {user.isLoggedIn ? '로그인됨' : '로그인 안됨'}
//      </p>

//      {/* 버튼 클릭했을 때 다크모드로 변경 */}
//      <button onClick={toggleTheme}>
//        {isDark ? '☀️라이트모드' : '🌙다크모드'}
//      </button>
//    </>
//  )