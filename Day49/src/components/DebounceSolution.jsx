import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react'

export default function DebounceSolution() {
  const debounceChange = useCallback(
    debounce((value) => {
      console.log('API호출: ',value);
    },1000),[]
  );
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
    debounceChange(e.target.value); // 디바운스 적용
  }
  return (
    <div>
      <h3 className='text-2xl'>Debounce 이용해서 성능 향상</h3>
        <input onChange={handleChange} />
        <p>{text}</p>
    </div>
  )
}

/**
 Debounce: 입력이 멈춘 뒤 일정 시간(1초)지나면 한번만 호출
 useCallback (바뀐게 없으면 다시 생성하지말아라)
 - 리액트에서 제공하는 훅
 - 함수를 메모이제이션해서 리렌더링 시 불필요한 함수 재생성을 막아주는 리액트 훅
 - useCallBack(fn, deps)
   fn : 재사용하고 싶은 함수
   deps : 의존성 배열 (이 값이 변하면 새 함수 호출)
   함수를 기억해뒀다가 필요할 때만 새로운 함수 저장소
 */