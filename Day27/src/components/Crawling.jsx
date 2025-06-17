import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Crawling() {

  const [msg, setMsg] = useState('');
  useEffect(()=>{
    axios.get('http://localhost:5000/api/hello')
         .then((res)=>{console.log(res)
          setMsg(res.data.message)
         })
         .catch(err => {console.error(err)});
  },[])
  return (
    <div>
      <h1>서버랑 연결</h1>
      <p>서버 응답: {msg}</p>

    </div>
  )
}


/**
Crawling
- 웹 사이트에서 HTML구조를 읽어서 데이터를 자동으로 수집하는 기술
- 사람대신 봇이 읽고 추출하는 것
- 뉴스제목, 상품 가격, 영화순위, 이미지 등 가져올 수 있도록 도와주는 것

리액트에서는 크롤링 불가
프론트에서 다른 사이트의 HTML을 직접 긁어 올 수 없음 - 보안상의 이유 (CORS 에러 발생)

출처 = 프로토콜 + 도메인 + 포트

웹 브라우저의 기본 보안 정책으로 출처가 다른 웹 사이트끼리는 리소스 공유할 수 없도록 만든 규칙

Express
- Node 환경에서 가장 널리 사용되는 백엔드 프레임워크
- 서버를 빠르고 쉽게 만들 수 있도록 도와주는 웹 프레임워크
리액트는 클라이언트, Express는 서버

리액트 크롤링 시 도와주는 라이브러리
- Puppeteer
- Cheerio

서버 만들기
$ npm install express puppeteer cheerio cors
$ npm install express concurrently

리액트만 실행하고 싶을 때
$ npm run dev:react

서버만 실행하고 싶을 때
$ npm run dev:server

서버 먼저 실행하고 리액트 실행
$ node 파일
 */