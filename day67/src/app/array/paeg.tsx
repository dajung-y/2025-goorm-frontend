import React from 'react'

export default function paeg() {
  
  let numArr : number[] = [1,2,3];
  let strArr : string[] = ["a","b","c"];

  // 제네릭 <>안에 타입 넣어주면 그 타입으로 여러 데이터 저장 가능
  // 함수에서 배열 다룰 때 많이 사용

  let numArr2 : Array<number> = [1,2,3];

  // 배열에 들어가는 요소의 타입이 여러개
  let multiArr :(number | string)[] = [1,"a"];

  return (
    <div>

    </div>
  )
}
