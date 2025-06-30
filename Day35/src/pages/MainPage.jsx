import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className='flex justify-center gap-4 m-8'>
      <Link to='/youtube'>
        <button className='px-4 py-2 bg-red-400 rounded text-white'>
          유튜브로 이동
        </button>
      </Link>
      <Link to='/mission'>
        <button className='px-4 py-2 bg-yellow-400 rounded text-white'>
          미션으로 이동
        </button>
      </Link>

    </div>
  )
}
