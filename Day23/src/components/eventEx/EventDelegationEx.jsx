import React from 'react'

export default function EventDelegationEx() {

  const handleClick = (e) => {
    // e.target - 누가 눌렀는지 확인해서 처리하는 방식 (이벤트 발생 대상)
    // if(e.target.tagName === "LI"){
    //   // 아이템 리스트(LI) 눌렀는지 확인
    //   console.log(e.target);
    //   console.log(e.target.tagName);
    // }

    const li = e.target.closest("li");
    if(li){
      console.log(`선택 : ${li.textContent}`);
    }
  }


  return (

    <ul onClick={(e) => {
      if(e.target.closest("li")){
        console.log(`${e.target.textContent} 클릭됨`);
      }
    }}>
      <li>사과</li>
      <li>딸기</li>
      <li>복숭아</li>
    </ul>
  )
}

/*
 * 이벤트 위임
 * 자식 요소마다 이벤트를 걸지 않고 부모 요소에 이벤트를 한번만 걸고 자식의 이벤트를 대신 처리하는 기술
 * 동적으로 추가된 요소들고 처리가 가능하기 때문에 성능, 유지보수 좋음
 */

/**
 * closest(), dateset, matches() 사용
 */