import axios from "axios";
import { useEffect, useState } from "react"
import Crawling from "./components/Crawling";
import NaverCrawling from "./components/NaverCrawling";

function App() {

  const [posts,setPosts] = useState([]);

  // 마운트(리액트 로드 중 한번만 실행)
  // posts게시글 단순 조회 ->GET
  useEffect(() => {
    console.log('처음실행');
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(res=>{console.log(res.data)})
         .catch(err=> {console.error(err)})

    console.log('완료됨');
  },[]);

  return (
    <>
    {/* <Crawling /> */}
    
    <NaverCrawling />

    </>
  )
}

export default App

/**
Axios - Http요청 보내기 위한 자바스크립트 라이브러리
REST API 통신
GET 데이터 가져오기 (조회)
POST 데이터 보내기 (회원가입, 글 생성)
PUT 데이터 수정 (전체 덮어쓰기)
DELETE 데이터 삭제

Axios는 응답을 자동으로 JSON으로 바꿔줌
fetch로 요청시 응답 받은 데이터 JSON형식으로 직접 바꿈

axios.get() Promise 반환
Promise - 나중에 작업이 완료될 때 실행
          성공시 then()
          실패시 catch()

ReactQuery 사용하면 axios 보다 강력한 상태관리
 */


/**
  async function loadData(){
    try{
      // 예외적인 상황 처리하는 구문
      const res = await axios.get('url');
      // 정상적인 데이터 들어오면 실행
    } catch(err){
      // 예외적인 상황인 발생하면 처리
      // console.error(err);
    }
  }
 */