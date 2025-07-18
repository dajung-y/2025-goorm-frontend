import React, { useEffect, useState } from 'react'

// 입력값이나 상태가 짧은 시간에 계속 바뀌는걸 잠시 기다렸다가 반영해주는 훅
// value : 감시할 값
// delay : 
export default function useDebounce(value,delay=500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(
      () => setDebounced(value)
    ,delay);
    return ()=> clearTimeout(timer);
  },[value,delay]);
  return debounced;
}
