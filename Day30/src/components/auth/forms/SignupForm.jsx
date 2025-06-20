import React from 'react'

export default function SignupForm() {
  return (
    <section>
      <form className='flex flex-col'
            onSubmit={(e) => {
              e.preventDefault();
              alert('회원가입');
            }}
      >       
        <label className='mb-2 text-sm text-gray-500'>아이디</label>
        <input type='text' 
              placeholder='아이디를 입력하세요'
              className='border border-gray-300 rounded-md p-2 mb-4'/>
        <label className='mb-2 text-sm text-gray-500'>비밀번호</label>        
        <input type='password' 
              placeholder='비밀번호를 입력하세요'
              className='border border-gray-300 rounded-md p-2 mb-4'/>
        <label className='mb-2 text-sm text-gray-500'>비밀번호</label>        
        <input type='password' 
              placeholder='비밀번호를 확인하세요'
              className='border border-gray-300 rounded-md p-2 mb-4'/>
        <label className='mb-2 text-sm text-gray-500'>이메일</label>        
        <input type='email' 
              placeholder='이메일을 입력하세요'
              className='border border-gray-300 rounded-md p-2 mb-4'/>
        <button className='p-2 mt-2 bg-blue-600 rounded-md text-white cursor-pointer hover:bg-blue-500'>회원가입</button>
      </form>
    </section>
  )
}
