import React from 'react'

export default function InsertSort() {

  const arr = [4,54,7,85,3,61,2,19];

  // 값을 교체할 때 사용할 임시 변수
  let temp;

  const insertSort = (arr) => {
    for(let i=0; i<arr.length; i++){
      let j =i;
      while(arr[j] > arr[j+1]){
        console.log(`j: ${j}, j+1 : ${j+1}`);
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        j--;
      }
    }
  }

  insertSort(arr);
  return (

    <div>
      <h1>삽입 정렬</h1>
      <p>{JSON.stringify(arr)}</p>
    </div>
  )
}

/**
 삽입 정렬
 - 앞에서부터 차례대로 정렬된 부분에 알맞은 위치에 삽입하는 방식
 - 각 숫자를 적절한 위치에 삽입하는 방식
 - 삽입정렬의 장점은 꼭 필요할 때만 위치를 변경, 선택정렬과 버블정렬보다 조금 효율적
 - 실무에서 소규모 알고리즘 작성할 때 사용
 - 정렬된 데이터에 값 추가할 때 사용
 */