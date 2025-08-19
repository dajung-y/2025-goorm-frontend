'use client'

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {

  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const admin = {
    id: "admin",
    pw: "admin1!"
  }

  const handleSubmit = () => {
    if(admin.id === id && admin.pw === pw){
      localStorage.setItem("isAdminLoggedIn","true");
      localStorage.setItem("adminId",id);
      alert("로그인되었습니다");
      setId("");
      setPw("");
      router.push('/admin');


    } else{
      alert("잘못된 아이디 혹은 비밀번호입니다");
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='py-4 text-2xl'>관리자 로그인</h1>
      <div className='flex flex-col items-center space-y-4'>
        <div>
          <label>ID</label>
          <input value={id} 
                  onChange={e => setId(e.target.value)}
                  className='ml-2 border rounded' />
        </div>
        <div>
          <label>PW</label>
          <input  type='password'
                  value={pw} 
                  onChange={e => setPw(e.target.value)}
                  className='ml-2 border rounded' />
        </div>
        <Button text={"로그인"} 
                onClick={handleSubmit}
                color='blue' />
      </div>
    </div>
  )
}
