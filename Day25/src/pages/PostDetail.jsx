import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {

  // 동적 parameter
  // - URL 주소에 변수처럼 바뀌는 값을 받아올 수 있게 하는 방식
  // - 주소에 정보를 실어서 보내는 방법
  // - post/1 => 1번글 보여주기
  // - 동적 파라미터 작성할 때 :변수명

  // url 경로에 있는 /뒤에 있는 값들을 꺼내오고 싶을 때
  // React Router에서 제공하는 Hook
  // useParams()

  // 꺼내올 때 자바스크립트의 object
  // {'id' : 1}
  const {id} = useParams(); //id만 꺼내서 사용
  console.log(id);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then()
    .then()

  })

  return (
    <div>
      <h1>상세페이지</h1>
      <h2>이 글의 ID는 {id}번</h2>
    </div>
  )
}
