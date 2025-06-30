import React, { useState } from 'react'

export default function QuickSort() {

  // 정렬할 데이터
  const [arr,setArr] = useState([6,3,56,8,2]);

  // 정렬된 데이터
  const [sorted, setSorted] = useState([]);

  const quickSort = (arr) => {
    console.log('배열: ',arr);
    // 배열의 길이가 1이거나 0이면 정렬할 필요 없음
    if(arr.length <=1) return arr;

    // 데이터가 여러개일 때
    // 처음 기준 잡을때 배열의 첫번째 값
    const pivot = arr[0]; 

    // 피벗보다 작은 값만 골라서 배열에 담기
    // slice(1) 1번 인덱스부터 끝까지
    const left = arr.slice(1).filter((value) => value<pivot); 
    const right = arr.slice(1).filter((value) => value>pivot); 
    console.log('왼쪽: ', left);
    console.log('오른쪽: ', right);

    // 다시 배열로 정렬
    return [...quickSort(left),pivot,...quickSort(right)];
  }

  const handleSort = () => {
    console.log('handleSort 실행');
    const result = quickSort(arr);
    setSorted(result);
  }
  return (
    <div>
      <h1>QuickSort</h1>
      <p>정렬 전: {JSON.stringify(arr)}</p>
      <button onClick={handleSort}>정렬하기</button>
      <p>정렬 후: {JSON.stringify(sorted)}</p>
    </div>
  )
}

/**
 퀵 정렬
 - 분할 정복방식으로 동작하는 알고리즘
 - 하나의 기준점을잡고 기준보다 작으면 왼쪽으로 보냄
                         크면 오른쪽으로 보냄
  반복적으로 정렬하는 방식
  위 내용 실행할때는 자기 자신을 호출하는 재귀 필요

  기준점(피벗 pivot)
  자바스크립트, 파이썬 sort() 정렬
  sort() 안에서 실질적으로 일어나는 정렬이 퀵 소트
 */