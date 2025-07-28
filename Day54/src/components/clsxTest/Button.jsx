import React from 'react'

export default function Button({primary, disabled, rounded}) {
  let className = 'btn '; // 기본적인 클래스명 먼저 할당
  if(primary && disabled){
    className += 'btn-primary btn-disabled'
  } else if(primary){
    className +='btn-primary'
  } else if(disabled){
    className +='btn-disabled'
  }

  if(rounded){
    className += 'btn-rounded';
  }

  return (
    <button className={className}>버튼</button>
  )
}
