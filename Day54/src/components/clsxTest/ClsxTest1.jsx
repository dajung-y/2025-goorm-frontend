import React from 'react'
import ButtonClsx from './ButtonClsx'

export default function ClsxTest1() {
  return (
    <div>
      <ButtonClsx primary={true} />
      <ButtonClsx primary={true} rounded={true} />
      <ButtonClsx primary={true} disabled={true} />
      <ButtonClsx primary={true} disabled={true} rounded={true} />
      <ButtonClsx primary={true} disabled={false} rounded={true} />
    </div>
  )
}

/**
 clsx
 - 조건에 따라 클래스를 동적으로 설정할 수 있게 도와주는 라이브러리
 - 리액트에서 조건부 스타일링이 필요한 경우 깔끔하게 제어 가능
 */