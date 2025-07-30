import Link from 'next/link'
import React from 'react'

export default function Gnb() {
  return (
    <nav>
      <ul className='flex space-x-2'>
        <li>
          <Link href='/about'>
            <span className='text-white'>ABOUT</span>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <span className='text-white'>CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
