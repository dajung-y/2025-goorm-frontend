import React from "react"
import ArticleList from "./components/ArticleList"

export default function App() {

  return (
    <>
      <ArticleList />
    </>
  )
}






// App은 여러개의 컴포넌트를 묶어주는 메인화면
// main.jsx App 만들어진 태그를 root에 끼워주는것
// 리액트는 클라이언트에서 웹 페이지를 만들어서 보여줌
// 브라우저에서 리액트 코드가 실행되며 html요소를 동적으로 생성해서 화면에 보여줌
// 처음 index.html파일만 서버에서 다운받고, 그 이후에는 화면 구성은 React코드로 처리

// 가상 DOM(Virturl DOM)
// - DOM의 복사본을 메모리상에 만듦(js 객체 트리)
// - reconcilation 알고리즘. 특정 key값으로 DOM요소 추적
// 리액트는 매번 화면 전체를 바꾸지 않음
// 눈에 보이는 화면을 복사해서 숨겨 놓음
// 바꾸는 부분만 실제 화면에 반영

// JSX속성에 자바스크립트의 불리언값을 전달하고싶을 때
// true 문자열로 전달하면 타입이 달라지므로 숫자, 불리언, 변수들은 {}에 넣어서 전달