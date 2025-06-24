import React, { useRef, useState } from 'react'

export default function Carousel() {

  const imgs = [
    'https://i.pinimg.com/736x/32/d2/39/32d239fb729eeff54c16455d0bbb2462.jpg',
    'https://i.pinimg.com/736x/8a/2b/10/8a2b10fc2d94bc11a8dafb901ee06999.jpg',
    'https://i.pinimg.com/736x/98/4c/0f/984c0f3b509855df02f4bec780e6da64.jpg',
    'https://i.pinimg.com/736x/87/c3/cc/87c3cc7db35c23aeb7e0de18cc458400.jpg',
    'https://i.pinimg.com/736x/98/94/e8/9894e8360d8b02db6934ff1348d3a8b8.jpg',
    'https://i.pinimg.com/736x/7a/60/da/7a60dac331ad5fcb150635f8d72c94f5.jpg'
  ]

  const imgRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleMovePrev = () => {
    if(currentIndex > 0) {
      setCurrentIndex((prev) => prev-1);
      console.log('이전으로 이동');
    }
  }

  const handleMoveNext = () => {
    if(currentIndex <imgs.length-2 && currentIndex>=0){
      setCurrentIndex((prev) => prev +1);
      console.log('다음으로 이동');
    }
  }

  return (
    <div className='p-4 w-full h-full'>
      <h1 className='text-2xl font-bold'>Carousel</h1>
      {/* 이미지 슬라이더 */}
      <div className='w-100 h-80 rounded-lg overflow-hidden'>
        <img src={imgs[currentIndex]}
             alt='이미지'
             className='w-full h-full' />
      </div>
      {/* 버튼 컨테이너 */}
      <div className='flex mt-4 justify-center gap-8 w-100'>
        <button onClick={handleMovePrev}
                className='px-4 py-2 bg-gray-200 rounded cursor-pointer'>
          이전
        </button>
        <button onClick={handleMoveNext}
                className='px-4 py-2 bg-gray-200 rounded cursor-pointer'>
          다음
        </button>
      </div>
    </div>
  )
}
