import React from 'react'
import KakaoLogin from './KakaoLogin'
import NaverLogin from './NaverLogin'

export default function SocialLoginBtns() {
  return (
    <div className='flex mx-4 justify-center gap-2'>
      <KakaoLogin />
      <NaverLogin />
    </div>
  )
}
