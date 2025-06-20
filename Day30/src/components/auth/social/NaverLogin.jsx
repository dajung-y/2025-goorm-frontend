import React from 'react'
import NaverIcon from '../../../assets/icons/naver-icon-file.png'

export default function NaverLogin() {

  const handleNaverLogin = () => {
    console.log('naver login btn 클릭');

  }
  return (
        <div>
          <button onClick={handleNaverLogin}
                  className='w-8 h-8 cursor-pointer'>
            <img src={NaverIcon} alt='아이콘'/>
          </button>
          
        </div>
  )
}
