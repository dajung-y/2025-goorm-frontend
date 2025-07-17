import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react'

export default function LodashTest3() {
  // window.innerWidth
  // - 브라우저 창(viewport)의 가로 너비를 픽셀 단위로 반환하는 읽기 전용
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  // 브라우저 창이 변경되면 0.5초 뒤 업데이트
  useEffect(() => {
    const handleResize = debounce(() => {
      setSize(window.innerWidth)
    },500);

    // 브라우저 창이 변경될 때마다 이벤트 실행
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너도 제거
    // 메모리 누수 방지
  },[]);


  return (
    <div>
      <h3>창 크기 변경</h3>
      <p>현재 window 사이즈: {size}px</p>
    </div>
  )
}

/**
 언마운트해서 컴포넌트가 사라질 때 이벤트를 삭제하는 것 - 성능 최적화
 창의 크기가 바뀔 때마다 업데이트하면 불필요한 렌더링이 너무 많이 발생 -> 디바운스 + 언마운트 같이 사용
 */