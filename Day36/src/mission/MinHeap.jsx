import React, { useState } from 'react'

export default function MinHeap() {

  const [input, setInput] = useState('');

  // 힙 저장공간
  const [heap, setHeap] = useState([]);

  // 최소 힙 구현
  const heapInsert = (arr) => {
    // 들어온 값 배열의 마지막 노드에 추가
    let i= arr.length-1;

    while(i>0){
      const parent = Math.floor((i-1)/2);
      // 부모가 크면 종료
      if(arr[parent] < arr[i]) break;
      // 작으면 위치 변경
      [arr[parent],arr[i]] = [arr[i],arr[parent]];

      i = parent;
      }
      return arr;
    }

  

  // 값 추가하는 함수
  const handleInsert = () => {
    const value = parseInt(input);
    console.log('insert: ',value);

    // 값 들어왔을 때
    if(!isNaN(value)){
      // newHeap에 저장
      const newHeap = heapInsert([...heap,value]);
      setHeap(newHeap);
    }
    setInput('');
  }

  return (
    <div>
      <h1>[Heap] 최소 힙 구현</h1>
      {/* 입력하는 곳 */}
      <div>
        <input type='text'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder='숫자를 입력하세요' />
        <button onClick={handleInsert}>추가</button>
      </div>
      {/* 출력하는 곳 */}
      <div>
        <p>입력된 힙: {JSON.stringify(heap)}</p>
      </div>
    </div>
  )
}
