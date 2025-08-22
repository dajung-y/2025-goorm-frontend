'use client'

import { useState } from "react"

export default function useInput(initialValue="") {
  const [value, setValue] = useState<string>(initialValue);
  // onChange 이벤트 핸들러에서 e의 타입은 주로 React.ChangeEvent<HTMLInputElement>
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const reset = () => setValue(initialValue);
  
 return {value, onChange, reset}
}
