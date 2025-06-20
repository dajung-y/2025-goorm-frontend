import React, { useState } from 'react'
import AuthTab from '../tabs/AuthTab'
import LoginForm from '../forms/LoginForm'
import SignupForm from '../forms/SignupForm'
import SocialLoginBtns from '../social/SocialLoginBtns';

export default function AuthModal() {

  // 탭 상태
    const [activeTab, setActiveTab] = useState('로그인');
    const tabMenus = ['로그인', '회원가입', '비밀번호 찾기'];


  return (
    <div>
      {/* 오버레이 */}
      <div className='fixed inset-0 bg-black/10 flex items-center justify-center z-50'>
        {/* 모달 */}
        <div className='flex bg-white rounded-3xl shadow-xl shadow-gray-500/50 w-[80vw] h-[90vh] gap-4'>
          {/* 왼쪽 섹션 */}
          <section className='flex flex-col w-1/2 rounded-l-3xl px-26 py-16 justify-center'>
          <div className='flex flex-col mb-4'>
            <h2 className='text-2xl font-bold mb-4'>
              <span className='block'>서비스에 오신 것을</span>
              <span className='block'>환영합니다</span>
            </h2>
            <p className='text-sm text-gray-500'>
              <span className='block'>매일 새롭게 업데이트 되는 다양한</span>
              <span className='block'>UIUX 디자인을 저작권 걱정 없이 무료로 사용해 보세요</span>
            </p>
          </div>
          {/* 탭 */}
          <AuthTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabMenus={tabMenus} />
   
          {/* 입력 form */}
          <div className='mt-6'>
           {activeTab=='로그인' &&<LoginForm />}
           {activeTab=='회원가입' &&<SignupForm />}
          </div>

          {/* sns 로그인 */}
          {/* 로그인 상태일 때만 */}
          {activeTab=='로그인' &&
            <div className='mt-4 text-center text-sm text-gray-400'>
            <p className='m-4'>SNS로 계속하기</p>
            <SocialLoginBtns />
            </div>
          }


          </section>
          {/* 오른쪽 섹션 */}
          <section className='w-1/2 rounded-r-3xl overflow-hidden'>
            <img src='https://i.pinimg.com/736x/e1/bd/97/e1bd979015df8bef18ac3bbf4909f7af.jpg' 
                 alt='이미지'
                 className='w-full h-full'/>
          </section>
        </div>
      </div>
    </div>
  )
}
