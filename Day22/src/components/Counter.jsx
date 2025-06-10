import React, { useState } from 'react'

export default function Counter() {

  // 카운트 숫자 저장하는 변수
  // let count = 0;


// count : 현재 값 (변수)
// setCount : 상태를 바꾸는 함수
// useState(0) : 0으로 시작하는 기억저장소
// [현재 값, 값 바꾸는 함수]
  const [count, setCount] = useState(0);


// 이름을 변경하고 유지할 때 사용하는 방법
 const [name,setName] = useState('sungkyu');

  // 클릭됐을 때 실행되는 함수
  function click(){
    setCount(count+1);
    setName('yeonjun');
    console.log(count);
  }

  return (
    <div>
      <p>클릭 수 : {count}</p>
      <button onClick={click} >+1</button>
      <p>이름 : {name}</p>
    </div>
  )
}

/* 

Hooks -  함수형 컴포넌트에서 상태나 생명주기를 사용할 수 있게 도와주는 도구

state(상태)
- 리액트 안에서 변할 수 있는 값
- 이 값이 바뀌면 리액트는 자동으로 그 컴포넌트를 다시 렌더링해서 화면에 새롭게 그림
- 상태 : 컴포넌트가 기억해야하는 값
- 컴포넌트 안에서 변화하는 값을 담는 변수 

일반변수는 그냥 메모리에만 저장
리액트는 이 값이 바뀌었는지 확인 못함

리액트는 virturl DOM + state 기반의 시스템이므로 내부적으로 state를 감시하고
state의 변화가 있을 때만 렌더링? 됨
리액트에서 일반변수는 확인의 대상이 아님
let, const => 화면 다시 랜더링될 때 값 초기화
useState => 값이 바뀌면 화면 다시 렌더링하고 값 유지함
*/