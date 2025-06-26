import React, { useState } from 'react'

export default function Recursive() {

  function show(count=0){
    console.log('show 함수 실행: ',count);

    // 종료 조건
    if(count>5){
      console.log('show 함수 종료');
      return;
    }
    show(count +1);
  }

  const [result, setResult] = useState(0);

  function factorial(num){
    console.log('함수 호출');
    if(num === 1) return 1;

    return num * factorial(num-1);
  }

  const handleClick = () => {
    const value = factorial(5);
    return setResult(value);
  }
  return (
    <div>
      <button onClick={() => show()}>재귀 함수 시작</button>
      <button onClick={handleClick}>팩토리얼</button>
      <p>팩토리얼 값{result}</p>
    </div>
  )
}

/**
 실제 제귀적 UI라이브러리
 - react-sortable-tree

 트리 시각화 하는 라이브러리
 - react-d3-tree

 노드(Node)
 - 데이터(value) + 그 다음 데이터를 가리키는 자식 노드(children)

 재귀는 자기 자신을 불러서 실행
 call stack

 */