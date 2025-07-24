import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperTest2() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
        }}>
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
    </div>
  )
}
/**
 modules
 - 스와이퍼가 가지고 있는 모듈안에 원하는 기능만 등록해서 사용
 - Autoplay, Pagination, Navigation
 */