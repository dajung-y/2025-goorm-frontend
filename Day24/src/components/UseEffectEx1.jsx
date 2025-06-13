import React, { useEffect } from 'react'
import "../css/UseEffectEx1.module.css"

export default function UseEffectEx1() {

  // useEffect(()=>{
  //   console.log('첫 실행');
  // },[]);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      alert('마감');
    },2000)
  },[]);

  return (


    <div className='box'>
      2초뒤 사라짐

    </div>
  )
}

/**
 useEffect
 - 화면이 늦게 뜨거나 버튼이 눌렸을 때 멈추는 것처럼 보일 수 있는 내용들을
   useEffect가 HTML 먼저 그리고 다음에 부수적인 일 처리
 - 장바구니 페이지 들어갈 때 서버에서 내 장바구니 데이터 불러오기
 - 컴포넌트가 보여지고 2초 후에 알림 띄우기
 - 주식/코인 차드 불러오기
 */
