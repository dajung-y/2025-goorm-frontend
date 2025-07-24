import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperTest3() {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{clickable: true}}>
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
