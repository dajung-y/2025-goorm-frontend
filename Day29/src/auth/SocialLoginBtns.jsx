import React from 'react'
import GoogleIcon from '../assets/icons/google-icon-file.png'
import NaverIcon from '../assets/icons/naver-icon-file.png'
import FacebookIcon from '../assets/icons/facebook-icon-file.png'
import KakaoIcon from '../assets/icons/kakao-icon-file.png'
export default function SocialLoginBtns() {
  const socialIcons = [
    {
      id: 'google',
      icon: GoogleIcon,
      link: '/',
    },
    {
      id: 'kakao',
      icon: KakaoIcon,
      link: '/',
    },
    {
      id: 'naver',
      icon: NaverIcon,
      link: '/',
    },
    {
      id: 'facebook',
      icon: FacebookIcon,
      link: '/',
    },
  
  ]
  return (
    <section className='flex justify-center gap-4'>
      {socialIcons.map((btn,index) => (
        <button key={index}
            className='w-8 h-8 cursor-pointer'>
          <img src={btn.icon} 
              alt={btn.id}
              className='w-full h-full'/>
        </button>

      ))}
    </section>
  )
}
