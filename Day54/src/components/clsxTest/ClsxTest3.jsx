import clsx from 'clsx';
import React, { useState } from 'react'

export default function ClsxTest3() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className={clsx('box', isActive && 'active')}>
        예제2: 조건부 클래스
      </div>
      <button onClick={() => setIsActive(!isActive)}>토글</button>
    </div>
  )
}
