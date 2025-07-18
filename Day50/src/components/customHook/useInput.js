import React, { useState } from 'react'

export default function useInput(initial='') {
  const [value, setValue] = useState(initial);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue('');
  return {value,onChange,reset};
}

/**
 텍스트 입력 상태를 간단하게 관리할 수 있음
 간단한게 값만 관리할 때는 커스텀 훅 사용
 여러개의 필드를 한 곳에서 관리, 유효성 검사, 제출 필요할 때는 useForm 사용
 */