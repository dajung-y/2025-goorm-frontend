'use client'
import Button from '@/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [adminId, setAdminId] = useState<string>("");
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminLoggedIn")==="true";
    const currentAdminId = localStorage.getItem("adminId") || "";

    setIsLoggedIn(loggedIn);
    setAdminId(currentAdminId);
  },[]);

  const handleLogin = () => {
    router.push('/admin/login');
  }

  const handleLogout= () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminId");
    setIsLoggedIn(false);
    setAdminId("");
  }

  const handleLoginRequired = () => {
    alert("로그인이 필요한 서비스입니다");
  }
  return (
    <div className='m-4'>
      <h3 className='text-2xl'>admin 페이지</h3>
      <div className='my-4 flex flex-col space-y-4'>
        { isLoggedIn ? (
          <Button text={"로그아웃"}
                  onClick={handleLogout}
                  color='blue' />
        ) : (
          <Button text={"로그인"}
                  onClick={handleLogin}
                  color='blue' />
        )}
        {isLoggedIn ? (
          <Link href='/admin/products'>
            <Button text={"상품목록"} color='blue' />
          </Link>
        ) : (
          <Button text={"상품목록"}
                  onClick={handleLoginRequired}
                  color='blue' />
        )}
        
      </div>
    </div>
  )
}
