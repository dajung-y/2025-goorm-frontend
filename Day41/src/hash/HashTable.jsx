import React from 'react'

export default function HashTable() {
  const tableSize = 5;
  // 각 칸은 배열, 충돌 일어나도 여러 값 저장 가능
  const table = new Array(tableSize).fill(null).map(() => []);

  // 실제 해시 테이블에 추가
  function insert(key, value){
    let hash = 0;

    console.log(`key : ${key}`);
    for(let i=0; i<key.length; i++){
      hash = hash + key.charCodeAt(i);
    }
    console.log(`해싱된 값 : ${hash}`);

    // 배열의 인덱스 결정

    // 전체 테이블 크기에서 나머지 계산
    const index = hash%tableSize;
    console.log(`index : ${index}`);

    // 테이블에 저장
    table[index].push([key,value]);

    console.log(`현재 테이블 : ${JSON.stringify(table)}`);
  }

  insert('dog', '강아지');
  insert('cat', '고양이');
  insert('fox', '여우');
  
  return (
    <div>HashTable에 저장하는 시뮬레이션</div>
  )
}

/**
 해시 테이블 구조
 - table = [ [], [], [], []]
   인덱스에 배열이 들어가는 구조 - 체이닝 방식
 */