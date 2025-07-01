import React from 'react'

export default function On() {

  const personList = [
    { name: '철수', age: 12, email: 'chulsoo@email.com' },
    { name: '영희', age: 14, email: 'younghee@email.com' },
    { name: '민수', age: 11, email: 'minsoo@email.com' },
    { name: '수진', age: 13, email: 'soojin@email.com' },
    { name: '지훈', age: 15, email: '' },
  ];

  // O(n) 이메일 유효성 검사하는 명령문 작성
  const inavls = personList.filter(person => person.email.trim()==='');
  console.log('이메일 누락: ', inavls);


  return (
    <div>
      <h4>O(n)</h4>
      {/* 사용자 목록 - 리스트 렌더링 O(n) */}
      <ul>
        { personList.map((person,i) => (
          <li key={i}>
            {person.name} - {person.age}세 - {person.email || '이메일 없음'}
          </li>
        ))}
      </ul>
      {/* 이메일 없는 사람 필터링 */}

    </div>
  )
}

/**
 O(n)
 n 입력 크기만큼 반복하는 코드
 n은 데이터의 개수 의미
 프론트에서 리스트 렌더링, 검색 필터, 총합 계산 등에서 자주 사용
 */

//  function friends (arr){
//   return ( 
//     arr.map((value,index) => (
//       <p key={index}>
//         {value}
//       </p>
//     ))
//   )
// }

// // 리액트에서 사용하는 방법

// {
//   friends(['성규','동우','우현','성열','명수','성종'])
// }