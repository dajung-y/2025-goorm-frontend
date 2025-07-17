import { throttle } from 'lodash'
import React from 'react'

export default function ThrottlingTest2() {
  const handleClick = throttle(() => {
    console.log('2초에 한번 반영');
  },2000);
  return (
    <div>
      <h3>버튼 클릭 trottle</h3>
      <button onClick={handleClick}
              className='px-2 bg-amber-300 rounded cursor-pointer'>
        버튼
      </button>
    </div>
  )
}
