import React from 'react'

export default function ObjectExample() {
  // const user : {id: number, name : string} = {
  //   id: 1,
  //   name: "성규" 
  // }
  // const user2 : {id: number, name : string} = {
  //   id: 2,
  //   name: "우현" 
  // }

  // 반복적인 타입선언 해결하기위해 type alias 사용
  type Person = {
    id: number,
    name: string
  }

  type Product = {
    id: number;
    title: string;
    price: number;
  }

  type Student = {
    name: string;
    grade: number;
    class: number;
    number: number;
  }

  const user1: Person = {
    id: 1,
    name: "성규" 
  }

  const item1: Product = {
    id: 101,
    title: "키링",
    price: 3000
  }

  const std1: Student = {
    name: "alina",
    grade: 1,
    class: 3,
    number: 1
  }
  const std2: Student = {
    name: "grace",
    grade: 3,
    class: 3,
    number: 3
  }
  const std3: Student = {
    name: "pagie",
    grade: 2,
    class: 2,
    number: 2
  }

  return (
    <div>
      <h1>ts 객체</h1>
      <p>{JSON.stringify(user1)}</p>
      <p>{JSON.stringify(item1)}</p>
    </div>
  )
}
