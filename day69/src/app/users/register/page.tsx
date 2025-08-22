// 폴더 : users
// 파일 : register/page.tsx
// 회원가입 페이지
'use client'
import LabelInput from '@/components/LabelInput';
import useInput from '@/hooks/useInput'
import React from 'react'

export default function page() {
  const id = useInput("");
  const name = useInput("");
  const username = useInput("");
  const email = useInput("");
  const pw = useInput("");
  const pwConfirm = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // React.FormEvent<HTMLFormElement> 타입을 갖는 이벤트 객체 e를 인자로 받음
    console.log("handleSubmit e type : ",typeof e); // object
    e.preventDefault();
  }


  return (
    <div className='w-full min-h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white p-8 shadow-lg rounded-2xl max-w-md w-full mx-4'>
        <h1 className='text-2xl text-blue-600 text-center font-bold'>회원가입</h1>
        <form onSubmit={handleSubmit}
              className='p-4'>
          <LabelInput
            label='아이디'
            placeholder='아이디를 입력하세요'
            value={id.value}
            onChange={id.onChange} />
          <LabelInput
            label='이름'
            placeholder='이름을 입력하세요'
            value={name.value}
            onChange={name.onChange} />
          <LabelInput
            label='사용자명'
            placeholder='사용자명을 입력하세요'
            value={username.value}
            onChange={username.onChange} />
          <LabelInput
            label='이메일'
            type='email'
            placeholder='이메일을 입력하세요'
            value={email.value}
            onChange={email.onChange} />
          <LabelInput
            label='비밀번호'
            type='password'
            placeholder='비밀번호를 입력하세요'
            value={pw.value}
            onChange={pw.onChange} />
          <LabelInput
            label='비밀번호 확인'
            placeholder='비밀번호를 입력하세요'
            value={pwConfirm.value}
            onChange={pwConfirm.onChange} />
          <button type='submit'
                  className='w-full mt-4 py-1 bg-blue-600 rounded text-white cursor-pointer'>
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}
