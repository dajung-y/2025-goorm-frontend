import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='w-full bg-white'>
      <div className='max-w-[1280px] mx-auto px-4 h-20 flex justify-between items-center'>
        {/* 왼쪽 */}
        <div>
          <h1 className='text-2xl font-bold'>BLOG</h1>
        </div>
        {/* 오른쪽 네비 */}
        <nav>
          <ul className='flex space-x-4 underline'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/create'>
              <li>Write Post</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
