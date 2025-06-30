import React, { useState } from 'react'

export default function NumberSort() {

  // input값 저장
  const [input, setInput] = useState('');

  // 입력된 배열
  const [arr, setArr] = useState([]);

  // 정렬된 배열
  const [sortedArr, setSortedArr] = useState([]);

  // 내림차수 정렬 함수
  const quickSort = (arr) => {
    // 배열 값 없거나 데이터 하나면 그대로 반환
    if(arr.length<=1) return arr;
    // arr[0] 기준값 지정
    const pivot = arr[0];
    // 큰 값 왼쪽으로
    const left = arr.slice(1).filter((value) => value > pivot);
    // 작은 값 오른쪽으로
    const right = arr.slice(1).filter((value) => value < pivot);
    return [...quickSort(left),pivot,...quickSort(right)];
  }

  // 입력된 값 배열로 저장
  const handleCreateArr = () => {
    // type = 'number' 로 받아도 type : string
    const value = parseInt(input);
    console.log(typeof value, value);

    // 숫자 입력된 경우
    if(!isNaN(value)){
      setArr(arr => [...arr, value]);
    }
    setInput('');
  }

  // 정렬된 함수 저장
  const handleSort = () => {
    if(arr.length<1) return;
    setSortedArr(quickSort(arr));
  }
  return (
    <div>
      <h1>[Quick Sort] 내림차순 숫자 정렬</h1>
      {/* 입력하는 부분 */}
      <div>
        <input type='number'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder='숫자를 입력하세요' />
        <button onClick={handleCreateArr}>
          입력
        </button>
        {/* 출력 부분 */}
        <p>입력된 배열: {JSON.stringify(arr)}</p>
        <button onClick={handleSort}>
          내림차순 정렬
        </button>
        <p>내림차순으로 정렬: {JSON.stringify(sortedArr)}</p>
      </div>
      <hr/>
    </div>
  )
}

/**
NumberSort.jsx:48 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

입력요소를 제어 컴포넌트로 사용할때
const [input, setInput] = useState();
input 상태가 undefined로 초기화
value={undefined} 는 비제어 입력처럼 동작
const [input, setInput] = useState('');
undefined 대신 빈 문자열로 초기화
 */