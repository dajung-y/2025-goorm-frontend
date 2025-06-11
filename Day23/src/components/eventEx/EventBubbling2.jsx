import React from 'react'

export default function EventBubbling2() {
  return (
    <div onClickCapture={()=>{alert('div')}}>
    {/* 이벤트 캡쳐링
        - 실행순서 : 조상 -> 부모 -> 자식
        - 로그 수집기로 활용
        - 경고, 방지 기능
    */}
      <section onClick={()=>{alert('section')}}>
        <button onClick={()=>{alert('button')}}>button</button>
      </section>
    </div>
  )
}


{/* 
  이벤트 버블링
  <section onClick={()=>{alert('section')}}>
    <button onClick={()=>{alert('button')}}>button</button>
  </section> 
*/}
