'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if(!isLoggedIn){
      alert("로그인이 필요합니다");
      router.push('/admin/login');
    }
  })
  return (
    <div>
      <h1>상품 목록</h1>
    </div>
  )
}
