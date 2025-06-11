import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='/'>
          <img src='https://www.ediya.com/images/common/top_logo_240822.gif' alt='이디야' />
        </a>
      </div>
      <div className='gnb__container'>
        <ul className='gnb'>
          <li>원두</li>
          <li>메뉴</li>
          <li>유통제품</li>
          <li>이디야멤버스</li>
          <li>상품권·제휴카드</li>
          <li>브랜드 소식</li>
          <li>고객 지원 · 케이터링</li>
        </ul>
      </div>
    </header>
  )
}
