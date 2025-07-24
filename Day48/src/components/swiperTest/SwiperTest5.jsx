import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function SwiperTest5() {
  const swiperRef = useRef();
  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide>
          <div style={
            {backgroundColor: 'lightblue',
              padding: 50
            }
          }>
            슬라이드1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={
            {backgroundColor: 'lightcoral',
              padding: 50
            }
          }>
            슬라이드2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={
            {backgroundColor: 'lightgreen',
              padding: 50
            }
          }>
            슬라이드3
          </div>
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiperRef.current.slideNext()}>다음</button>
    </div>
  )
}
