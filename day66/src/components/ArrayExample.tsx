import React from 'react'

export default function ArrayExample() {
  let fruits : string[] = ["사과", "복숭아", "딸기"];

  let numbers : number[] = [1,2,3,4,5];

  return (
    <div>
      <h1>ts 배열</h1>
      <p>{JSON.stringify(fruits)}</p>
    </div>
  )
}
