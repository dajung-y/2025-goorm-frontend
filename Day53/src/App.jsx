import React from 'react'
import Mission1 from './components/missions/Mission1'
import Mission2 from './components/missions/Mission2'
import Mission3 from './components/missions/Mission3'

export default function App() {
  return (
    <div>
      <Mission1 />
      <Mission2 />
      <Mission3 />
    </div>
  )
}

/**
 SCSS
 - CSS의 확장 문법
 - 기존의 CSS 문법을 그대로 사용하면서 변수, 중첩, 조건, 반복, 믹스인 같은 기능 추가 가능
 - 확장자 .scss 확장자 사용
 - 구조적이고 재사용성 높은 스타일 작성 가능
 */