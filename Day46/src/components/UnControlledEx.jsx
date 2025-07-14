import React, { useRef } from 'react'

export default function UnControlledEx() {

  const inputRef = useRef();
  const handleClick = () => {
    alert(inputRef.current.value);
  }
  return (
    <div>
      <input ref = {inputRef}
             placeholder='이름 입력' />
      <button onClick={handleClick}>출력</button>
    </div>
  )
}

/* 폼을 어떻게 관리하는지에 대한 개념
  Uncontrolled Components
  - React가 값을 직접 관리하지 않고 DOM이 값을 자체적으로 관리하는 방식
  - 필요할 때만 ref를 통해서 값을 가져오는 방식
  - 브라우저에 맡기고 나중에 필요할 때만 가져다 쓰는 방식
  
  Controlled Components
  - React에서 input, textarea, select 등의 값을 state로 직접 관리하는 방식
  - 사용자가 값을 입력할 때마다 onChange 이벤트로 상태를 업데이트하고 그 상태가 컴포넌트에 반영
      
      
*/