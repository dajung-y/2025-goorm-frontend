import React from 'react'

export default function TupleExample() {

  // Tuple 자료형
  const student : [number, string] = [
    1,
    "성규"
  ];

  const success : [boolean,string] = [
    true, "성공"
  ];

  const error : [boolean,string] = [
    false, "실패"
  ];

  return (
    <div>TupleExample</div>
  )
}
