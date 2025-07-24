import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperTest4() {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation>
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
