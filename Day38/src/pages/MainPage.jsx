import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className='flex justify-center gap-4 mt-12'>
      {/* <Olog2n /> */}
      {/* <ObjectBigO /> */}

      <Link to='/password'>
        <button className='font-bold text-2xl text-sky-600 cursor-pointer'>
          비밀번호 힌트 찾기
        </button>
      </Link>

      <Link to='/popular'>
        <button className='font-bold text-2xl text-amber-300 cursor-pointer'>
          인기 상품 보러가기
        </button>
      </Link>

    </div>
  )
}
