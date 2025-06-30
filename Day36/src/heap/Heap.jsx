import React, { useState } from 'react'

// 직접 힙 구현
// 배열을 이용해서 최소 힙
// React 상태로 힙 관리(useState)
// 삽입, 삭제, 출력기능 포함

export default function Heap() {

  // 입력 값 저장
  const [input, setInput] = useState(0);

  // 힙 구조 저장하는 배열 관리
  const [heap, setHeap] = useState([]);

  // 실제 힙 구조 이용해서 데이터 제일 앞쪽으로 가져오는 작업하는 함수
  const heapInsert = (arr) => {
    console.log('heapInsert');

    // 추가한 마지막 요소의 인덱스를 i에 저장
    // 베열의 마지막은 항상 자식 노드
    let i = arr.length -1;

    while(i>0){
      const parent = Math.floor((i-1)/2);
      console.log('부모: ',parent);

      // 부모가 작으면 종료
      if(arr[parent] <= arr[i]) break;
      // 부모가 크고 자식이 작으면 위치 변경
      [arr[parent],arr[i]] = [arr[i],arr[parent]]; // swap
      // 부모로 인동
      i = parent;
    }
    console.log('변경된 배열: ',arr);
    return arr;
  }

  // 실제 삭제한 뒤 정렬해주는 함수
  // 부모 -> 자식으로 정렬
  // 루트 노드부터 시작해서 자식 노드들과 비교하며 자리를 바꿈
  const heapDown = (arr) => {
    let i =0;
    const length = arr.length;

    while(true){
      let left = 2*i +1;
      let right = 2*i +2;
      let min = i; // 현재 부모가 min으로 가정하고 시작
      // 왼쪽 자식이 배열에 있는지 확인하고 값이 min보다 작은지 확인
      if(left< length && arr[left]<arr[min]){
        min = left;
      }
      // 오른쪽 자식이 배열에 있는지 확인
      if(right < length && arr[right]<arr[min]){
        min = right;
      }
      // 자식들보다 부모가 작으면 종료
      if(min === i ) break;

      // 위에서 실행한 내용으로 값 교환
      [arr[i],arr[min]] = [arr[min], arr[i]];

      // 자식으로 내려가서 다시 비교
      i = min;
    }
    return arr;
  }

  // 삽입하는 함수
  const handleInsert = () => {
    const value = parseInt(input);
    console.log(value);

    if(isNaN(value)){
      return; // 숫자 아니면 return
    }

    // 숫자이면 힙에 저장
    const newHeap = heapInsert([...heap,value]);
    setHeap(newHeap);
    
  }

  // 삭제하는 함수
  const handleRemoveMin = () => {
    // 빈 배열인경우 실행X
    if(heap.length ===0) return;

    // 기존 배열 가져옴
    const newHeap =  [...heap];
    const min = newHeap[0];
    // 마지막 데이터를 루트로 올림
    newHeap[0] = newHeap.pop();
    // 재정렬
    setHeap(heapDown(newHeap));
    alert(`꺼낸 최소값: ${min}`);
  }
 
  return (
    <div>
      <h1>Heap 자료구조</h1>
      <input type='text'
             onChange={(e) => setInput(e.target.value)}
             placeholder='숫자 입력' />
      <button onClick={handleInsert}>삽입</button>
      <button onClick={handleRemoveMin}>최소값 삭제</button>

      <p>Heap 구조 배열: 
        <span> {JSON.stringify(heap)}</span>
      </p>

    </div>
  )
}

/**
 Heap
 - 우선순위가 높은 것부터 꺼내기 쉽게 만든 구조
 - 트리구조지만 배열로 구현됨
 - 항상 맨 위(루트 노드)가 최댓값/최솟값
 - 알림, 실시간 채팅, 콜백 시스템, 경로 탐색, 스케줄러
 - 라이브러리 ex) heap-js, TinyQueue, ...

 - 완전 이진 트리
  - 0레벨 : 인덱스 0번, 1개
  - 1레벨 : 인덱스 1,2
  - 2레벨 : 인덱스 3,4,5,6

 */