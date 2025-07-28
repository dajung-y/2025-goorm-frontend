import React from 'react'
import clsx from 'clsx'
import './Button.scss';

export default function ButtonClsx({primary, disabled, rounded}) {
  return (
    <button
      className={clsx('btn',{
        'btn-primary' : primary,
        'btn-disabled': disabled,
        'btn-rounded' : rounded
      })}>
      clsx 버튼적용
    </button>
  )
}

/**
 clsx() 함수
 - 문자열과 객체를 조합하여 클래스명을 자동으로 조립해주는 함수
 - 조건에 따라 클래스를 포함하거나 제거 가능
 첫번째 매개변수는 무조건 포함되는 기본 클래스
 두번째 매개변수는 {'클래스명' : 조건} 형식
 객체 형태로 전달된 부분은 조건이 true일 때만 클래스명 추가
 */