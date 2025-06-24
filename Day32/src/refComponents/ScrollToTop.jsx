import React, { useRef } from 'react'

export default function ScrollToTop() {

  // null로 초기화
  const topRef = useRef(null);

  // 위로 이동하는 함수
  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='p-4 w-full h-[2000px] bg-blue-100'>
      {/* 최상단 */}
      <div ref={topRef}></div>
      {/* 버튼 */}
      <button onClick={handleScrollToTop}
              className='fixed right-8 bottom-8 p-4 rounded-full bg-gray-300 text-lg font-bold cursor-pointer'>
        위로
      </button>
      <h1 className='text-2xl font-bold'>ScrollToTop</h1>
    </div>
  )
}
