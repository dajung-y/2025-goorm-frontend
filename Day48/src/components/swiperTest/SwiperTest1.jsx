import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperTest1() {
  return (
    <div>
      <Swiper>
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
 슬라이더 형 UI 컴포넌트 라이브러리
 - 이미지 슬라이더, 다단계 폼, 캐러셀 등 화면만들 때 사용하는 도구
 <Swiper> 전체 슬라이드를 감싸는 부모 컴포넌트가 하나 필요함
 swiper/css 필요
 */