import React from 'react'

export default function EventBubbling1() {

  
  //const 변수명 = 함수정의
  // 변수에 함수를 넣는 것
  const handleButtonClick = (e) => {
    e.stopPropagation(); // 부모 팝업 안뜨게 설정
    alert('버튼 클릭');
  }

  const handleParentClick = () => {
    alert('부모');
  }

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleButtonClick}>클릭해보세요</button>
    </div>
  )
}

/*
 * 이벤트 버블링
  - 어떤 요소에서 이벤트가 발생하면 그 요소 -> 부모요소 -> 조상요소
    순서대로 위로(bubble) 전파되는 현상

    <div onClick={handleParentClick}>
      <button onClick={handleButtonClick}>클릭해보세요</button>
    </div>

    위의 코드 실행하면 모두 실행됨
    e.stopPropagation() => 자식요소에 넣어서 부모요소 안뜨게 함


 */