import { useEffect } from "react";
import { db } from './firebase'
import axios from "axios";
import { get, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import JoinPage from "./pages/JoinPage";
import { Route, Routes } from "react-router-dom";
import NavPage from "./pages/NavPage";
import SubPage from "./pages/SubPage";
function App() {


  return (
    <>
      <Routes>
        <Route path="/nav" element={<NavPage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </>
  )
}

export default App

/**
Firebase - 구글이 제공하는 실시간 데이터베이스, 인증, 스토리지 등 다양한 기능을 제공하는 백엔드 플랫폼
리액트에서 Firebase 사용할 수 있도록 라이브러리 다운

 */

  // firebase db 주소
  // const DBURL = import.meta.env.VITE_FIREBASE_DB_URL;

  // const data = {
  //   name: '이름',
  //   age: '20',
  // };

  // useEffect(()=>{

    // async function fetchData() {
    //   try{
    //     const res = await axios.post(DBURL,data);
    //     console.log(`응답: ${res}`);
    //   } catch(err) {
    //     console.error(err)
    //   }
    // }
    // fetchData();


    // set()
    // 기존 내용 덮어쓰기
    // 실제 파이어베이스는 각각의 고유한 키를 이용해서 데이터 저장
    // uuid 라이브러리 다운받아야함

    // console.log('고유한 값: ',uuidv4());

    // 데이터 추가
    // const writeData = () => {
    //   console.log('함수실행');
    //   set(ref(db,`users/${uuidv4()}`),data)
    //   .then(()=> console.log('데이터 쓰기 성공'))
    //   .catch((e)=> console.error('데이터 추가 실패',e));
    // }
    // writeData();

    // 데이터 가져오기
    // const readData = async () => {
    //   console.log(`데이터 가져오기 실행`);
    //   try{
    //     const resData = await get(ref(db,'users'));
    //     console.log(resData.val()); // 데이터를 객체 형태로 꺼내올 때 val()로 가져옴
    //   } catch(e) {
    //     console.error(e);
    //   }
    // }
    // readData();

    
  // },[]);