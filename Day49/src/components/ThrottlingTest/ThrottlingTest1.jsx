import { throttle } from 'lodash';
import React, { useEffect } from 'react'

export default function ThrottlingTest1() {

  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log(`스크롤 이벤트 발생: ${window.scrollY}`);
    },500);
    window.addEventListener('scroll',handleScroll);

    return window.removeEventListener('scroll',handleScroll);
  },[]);


  return (
    <div className='h-3000'>
      {/* 스크롤 로그 제한 */}
      <h3>Throttling 스크롤 예제</h3>
      <p>아래로 스크롤 해보세요</p>
    </div>
  )
}

/**
 Trottling
 - 일정 시간마다 한 번씩만 실행되게 제한하는 기법
 - 반복되는 이벤트 중 정해진 시간마다 한 번만 실행

 사용 이유
 - 초당 수십번 발생하는 이벤트(스크롤, 마우스 이동 등)을 일정 간격으로 제한해 브라우저 렌더링/성능 최적화 하기위해 사용
 - lodash 이용해서 사용

 */

/**
   useEffect(() => {
    const handleScroll = () => {
      console.log(`스크롤 이벤트 발생: ${window.scrollY}`)
    }
    // 브라우저에서 마우스가 움직일 때마다 이벤트 발생
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[]);
 */