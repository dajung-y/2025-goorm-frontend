import React, { useState } from 'react'

// 토글 초기값 설정
export default function useToggle(initial = false) {
  const [value, setValue] =useState(initial);
  const toggle = () => {
    setValue(v => !v);
  }
  return [value,toggle];
}
