import React from 'react'
import DebounceTest from './components/DebounceTest'
import LodashTest1 from './components/lodashTest/LodashTest1'
import LodashTest2 from './components/lodashTest/LodashTest2'
import LodashTest3 from './components/lodashTest/LodashTest3'
import WindowSize from './components/WindowSize'
import ThrottlingTest1 from './components/ThrottlingTest/ThrottlingTest1'
import ThrottlingTest2 from './components/ThrottlingTest/ThrottlingTest2'
import UseCallbackTest1 from './components/useCallbackTest/UseCallbackTest1'
import UseMemoTest1 from './components/useMemoTest/UseMemoTest1'

export default function App() {
  return (
    <div>
      {/* <DebounceTest /> */}
      {/* <LodashTest1 /> */}
      {/* <LodashTest2 /> */}
      {/* <LodashTest3 /> */}
      {/* <WindowSize /> */}
      {/* <ThrottlingTest1 /> */}
      {/* <ThrottlingTest2 /> */}
      {/* <UseCallbackTest1 /> */}
      <UseMemoTest1 />
    </div>
  )
}

/**
 성능 최적화
 Debounce
 - 사용자가 입력을 멈춘 후 일정 시간 뒤에만 함수를 실행하는 기법
 - 이벤트가 여러번 발생해도 마지막 이벤트만 유효하게 처리
 - 검색창 자동완성, 입력값 유효성 검사 등에서 사용
 - onChange, onKeyUp, onInput 등의 이벤트에서 사용자가 입력을 마치고 조금 기다렸다가 처리하고 싶을 때

 Throttle
 - 사용자가 어떤 행동을 연속적으로 해도 일정 시간 간격으로만 함수 실행이 일어나도록 제한하는 기법
 - 이벤트가 자주 발생하더라도 주기적으로 1회만 처리

 사용 이유
 브라우저에서 발생하는 이벤트가 매우 빈번
 - 사용자가 검색창에 글자 입력할 때 : input
 - 스크롤할 때 : scroll
 - 창 크기 바꿀 때 : resize
 - API요청, 렌더링 계속 붙어서 성능저하, UX저하 발생
 */