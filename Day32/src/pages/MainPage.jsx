import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className='m-4'>
      <h1 className='mb-4 text-2xl font-bold'>MainPage</h1>
      <div className='flex justify-center gap-8'>
        <Link to='/scrolltop'>
          <button className='px-4 py-2 bg-amber-200 rounded cursor-pointer'>
            Scroll to Top
          </button>
        </Link>
        <Link to='carousel'>
          <button className='px-4 py-2 bg-blue-200 rounded cursor-pointer'>
            Image Carousel
          </button>
        </Link>
      </div>

    </div>
  )
}
