import React from 'react'
import EventBubbling1 from './components/eventEx/EventBubbling1'
import EventBubbling2 from './components/eventEx/EventBubbling2'
import EventBubbling3 from './components/eventEx/EventBubbling3'
import EventDelegationEx from './components/eventEx/EventDelegationEx'
import UseEffectEx1 from './components/useEffect/UseEffectEx1'
import MenuPage from './components/ediya/MenuPage'
import './App.css'

export default function App() {
  return (
    <>
      {/* <EventBubbling1 /> */}
      {/* <EventBubbling2 /> */}
      {/* <EventBubbling3 /> */}
      {/* <EventDelegationEx /> */}
      {/* <UseEffectEx1 /> */}
      <MenuPage />
    </>
  )
}

/*
어떤 HTML들을 Component 만드는게 좋을까?
- 사이트에 반복해서 출현하는 HTML덩어리들은 컴포넌트로 만들면 좋음
- 내용이 자주 변경될 것같은 부분 잘라서 컴포넌트로 만들면 좋음
- 다른 페이지를 만들고 싶다면 그 페이지의 HTML내용을 하나의 컴포넌트로 만듦
- 다른 팀원들과 협업할 때 웹 페이지를 컴포넌트 단위로 나눠서 작업 분리
*/