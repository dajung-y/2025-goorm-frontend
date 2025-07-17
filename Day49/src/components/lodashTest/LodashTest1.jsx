import { debounce } from 'lodash'
import React from 'react'

export default function LodashTest1() {
  const showText = debounce(
    (text) => {
      console.log('입력한 내용: ',text);
      alert('입력한 내용 : '+ text);
    }, 1000
  );
  return (
    <div>
      <h3>Lodash 예제</h3>
      {/* 글자 입력 후 1초 뒤에 실행 */}
      <input onChange={e => showText(e.target.value)}
             placeholder='글자 입력 후 잠시 기다려보세요'
             className='border rounded' />

    </div>
  )
}

/**
 Lodash 라이브러리
 - npm install lodash
 - 자바스크립트에서 자주 사용되는 기능을 모아두는 범용 유틸리티 함수라이브러리
 - 특히 성능 최적화용 debounce, throttle 함수 많이 사용
 - lodash와 useCallback 같이 사용
 */