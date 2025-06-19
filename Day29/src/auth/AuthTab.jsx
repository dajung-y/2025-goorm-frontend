import React, { useState } from 'react'

export default function AuthTab() {

  // default = 로그인
  const [activeTab, setActiveTab] = useState('로그인');
  const authState = ['로그인', '회원가입', '비밀번호 찾기'];
  return (
    <div className='flex bg-gray-200 border-2 border-gray-200 rounded-md text-gray-500 text-sm'>
      {authState.map((tab,index) => (
        <button key={index}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-md cursor-pointer 
                            ${activeTab==tab ? `bg-white text-black font-semibold` 
                                             : `hover:bg-white hover:text-black hover:font-semibold`}`}>
                {tab}
        </button>
      ))}
    </div>
  )
}
