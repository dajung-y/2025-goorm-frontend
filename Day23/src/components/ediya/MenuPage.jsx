import React from 'react'
import Header from './Header'
import SubVisualContainer from './SubVisualContainer'
import MenuContainer from './MenuContainer'


export default function MenuPage() {
  return (
    <>
      <Header />
      <SubVisualContainer />
      <div className='location__container'>
        <span>HOME {'>'} </span>
        <span>메뉴 {'>'} </span>
        <span>베이커리</span>
      </div>
      <MenuContainer />

    
    </>
  )
}
