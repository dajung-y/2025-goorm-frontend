import React from 'react'

export default function page() {

  // 객체 리터럴 타입
  type Student = {
    name: string;
    gender: string
  }

  // 타입 선언했을 때 모든 변수 받아와야함
  const s1 : Student = {
    name: "amy",
    gender: "female"
  }

  // ? 옵션
  type Person = {
    name: string;
    age? : number;
  }

  const p1 : Person = {
    name: "Dean"
    // age : number | null
  }

  let stu : object = {
    name: "Tom",
    grade: 3
  }
  console.log(stu);

  return (
    <div>page</div>
  )
}
