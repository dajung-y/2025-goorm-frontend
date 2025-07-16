import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <main className='mt-8 mx-8 w-screen'>
      <div className='flex justify-center gap-8'>
        <Link to='/cospro3'>
          <span className='text-3xl font-semibold underline'>COSPRO 3차 문제</span>
        </Link>
        <Link to='/cospro4'>
          <span className='text-3xl font-semibold underline'>COSPRO 4차 문제</span>
        </Link>
        <Link to='/cospro5'>
          <span className='text-3xl font-semibold underline'>COSPRO 5차 문제</span>
        </Link>
      </div>

    </main>
  )
}
