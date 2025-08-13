// /admin
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function AdminDashboard() {

  const[authorized, setAuthorized] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

    if(!isLoggedIn){
      // 로그인 페이지로 이동한 후 뒤로가기 눌렀을 때 관리자 페이지로 못돌아오도록
      router.replace("/admin/login");
    } else {
      setAuthorized(true);
    }
  },[]);

  // 로그인 여부 확인 전에는 화면에 아무것도 보이지 않게 함
  // 서버인증, JWT, 세션 권장
  if(!authorized) return null;

  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">관리자 대시보드</h1>
    <ul className="space-y-2">
      <li>
        <a href="/admin/products" className="text-blue-600 underline">
          상품 관리
        </a>
      </li>
      <button
        className="rounded bg-blue-200 p-2 mt-4"
        onClick={() => {
          localStorage.removeItem("adminLoggedIn");
          router.reload();
        }}
      >
        로그아웃
      </button>
    </ul>
  </div>
  )
}

// 세션(Session)
// - 웹에서 사용자 로그인 상태를 유지하기 위한 대표적인 방식중 하나
// - 서버 쪽에 로그인 정보를 저장하고 브라우저에서 세션을 식별할 수 있는 세션 ID만 쿠키로 전달하는 방식

/**
 실무에서 가장 흔하게 사용하는 로그인 유지방법
 1. NextAuth.js (OAuth)
    pages router -> getServerSideProps로 보호하는게 가장 깔끔
    axios 안에 create(baseUrl, withCredentials: true)

    app router -> middleware에서 쿠키/세션 확인하여 /amdin/* 리다이렉트
 2. 서버 세션
 3. JWT (쿠키저장, refresh 토큰 포함)

 비밀번호 넘길 때 암호화 진행
 npm i bcrypt

 쿠키(Cookie)
 - 브라우저가 서버로부터 받아서 로컬에 저장하는 작은 데이터 조각
 - 웹사이트에서 이 쿠키를 이용해서 사용자의 상태(로그인여부, 장바구니 등)기억

 HttpOnly
 - 자바스크립트에서 접근 불가 (XSS) 방어
 */