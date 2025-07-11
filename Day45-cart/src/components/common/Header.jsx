import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex justify-center items-center w-screen h-20 shadow'>
      <div className='flex justify-between items-center w-full max-w-[1280px] px-4'>
        <div>
          <Link to='/'>
            <button>
              <h1 className='text-2xl font-bold'>Apple</h1>
            </button>
          </Link>
        </div>
        <div>
          <Link to='/cart'>
            <button className='text-2xl font-bold cursor-pointer'>
              <h1>장바구니</h1>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
