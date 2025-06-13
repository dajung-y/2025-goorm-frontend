import React, { useEffect, useRef, useState } from 'react'
import Table from 'react-bootstrap/Table';

export default function UseEffectEx2() {

  const [board, setBoard] = useState([]);
  // 브라우저 로딩이 될 때 기존 게시글을 모두 가져오기

  // useRef()
  // - 처음 컴포넌트가 렌더링 될 때만 특정 코드 실행
  // - useEffect 안에서 처음인지 아닌지 추적
  // - 컴포넌트가 리렌더링 되더라도 값이 초기화 되지않고 유지되며 값이 바뀌어도 화면 리렌더링되지 않음

  const firstLoad = useRef(true); 

  useEffect(()=>{
    // 게시글 가져올 url 확인
    // https://jsonplaceholder.typicode.com/users

    if(firstLoad.current){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setBoard(json))
      console.log(`타입: ${typeof board}`);
      console.log(`데이터: ${board}`);
      firstLoad.current = false; // 처음 한 번만 실행
    }
  },[board])

  return (
    <div>
      <h1>게시판</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            board.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}


/**
AJAX (Asynchronous Javascript And XML)
- 웹페이지를 전체 새로고침 없이 서버와 데이터를 주고받을 수 있게 해주는 기술
- 서버: 데이터를 제공하는 컴퓨터
  클라이언트: 데이터 요청하는 컴퓨터
  Request: 요청
  Response: 응답

XML - html처럼 생겼지만 데이터 전달용
  문서처럼 구조 표현하기 좋음
  복잡한 구조를 표현하기 좋음
  보안성 문서들 처리할 때 사용
  단점
   - 태그가 많아지고 느려짐
   - IOT 호환 잘 안됨
   - 파일용량 커지게 됨 

JSON - 자바스크립트 객체 문법 기반으로 데이터를 보내고 받는 구조
  key, value 이용해서 데이터 주고 받음
  가볍고 간단
  현대 웹 개발에서 거의 표준처럼 사용

프로토콜(규칙)
포트번호
 - 하나의 컴퓨터에서 여러개의 데이터들과 통신
   웹, 다운로드(FTP), html통신, 리액트 통신, db 통신 충돌 막기 위해 포트번호 붙음


useEffect 실행순서
1. 컴포넌트가 처음 렌더링
2. 렌더링이 끝나고 useEffect실행
3. state나 props가 바뀜 -> 다시 렌더링
4. 다시 렌더링 되기 전 cleanup 함수 실행, 기본에 있는 내용 정리하고 새로 실행
5. 컴포넌트 사라짐

useRef()

react-query 라이브러리
- 내부에서 캐싱, 중복방지 무한 반복 없이 데이터 간단하게 관리 가능

 */