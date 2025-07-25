import React from 'react'
import '../scss/ScssTest4.scss'
export default function ScssTest4() {
  return (
    <div>
      <h3>@if 조건문 예제</h3>
      <div className='box'>
        조건문
      </div>

      <h3>@for 반복문 예제</h3>
      <div className='box'>
        {
          [1,2,3,4,5].map(num => (
            <div key={num}
                 className={`box-${num}`}>
                  Box {num}
            </div>
          ))
        }
      </div>
    </div>
  )
}

/*
 조건 
 @if 조건에 따라 스타일 다르게 적용 
 @for 숫자를 반복해서 스타일 생성
 @each 리스트나 맵 돌면서 스타일 생성
 @while 조건이 참인 동안 반복

 조건부 스타일 작성 가능
 */