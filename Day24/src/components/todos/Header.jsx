import React from 'react'
import MoonIcon from '../../assets/icons/moonIcon.png'

export default function Header() {
  return (
    <header>
      <img src={MoonIcon} alt='로고' className='main__icon'/>
      <nav className='gnb__container'>
        <ul className='gnb'>
          <li>ALL</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
    </header>
  )
}
