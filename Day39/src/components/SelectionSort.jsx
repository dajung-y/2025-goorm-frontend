import React from 'react'

export default function SelectionSort() {

  // 전체를 다 탐색하며 가장 작은 숫자를 맨 앞으로
  const arr = [5,2,4,10,8,1,3,6];

  const selectSort = (arr) => {
    for(let i =0; i<arr.length; i++){
      let min= i;
      for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[min]){
          min = j;
        }
      }
      console.log(`변경전 arr : ${arr}`);
      // 가장 작은 값이 있는 index 위치 바꿈
      [arr[i],arr[min]] = [arr[min],arr[i]];
      console.log(`현재 i: ${i}, 최소값이 위치한 index: ${min}`);
      console.log(`현재 arr: ${arr}`);
    }
  }
  selectSort(arr);
  return (
    <div>
      <h1>선택 정렬</h1>
    </div>
  )
}

/**
 선택 정렬
 - 가장 작은 데이터를 선택해서 앞쪽으로 차례차례 정렬하는 방식
 - 배열을 처음부터 끝까지 돌면서 가장 작은 값을 찾아 현재 위치와 교환
 - 시간복잡도 O(n^2), 공간복잡도 O(1)로 비교적 간단, 하지만 느림
 - 선택 정렬은 실무에서 잘 안쓰긴 하지만 면접에서 자주 나옴
 */