import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../app/userStore'

export default function Header() {

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  return (
    <header className='flex justify-center items-center w-full h-20 bg-white shadow-md'>
      <div className='flex justify-between items-center w-full max-w-[1280px] px-4'>
        <div>
          <Link to='/'>
            <button className='cursor-pointer'>
              <h1 className='text-2xl font-bold'>ZUSTAND</h1>
            </button>
          </Link>
        </div>
        <div>
          {
            isLoggedIn ? (
              <Link to='/mypage'>
                <button className='px-4 py-1 bg-blue-500 text-white font-semibold rounded cursor-pointer hover:bg-blue-600'>마이페이지</button>
              </Link>
            ) : (
              <Link to='/login'>
                <button className='px-4 py-1 bg-blue-500 text-white font-semibold rounded cursor-pointer hover:bg-blue-600'>로그인</button>
              </Link>
            )
          }
        </div>
      </div>
    </header>
  )
}
