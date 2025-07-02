import React, { useState } from 'react'

export default function Onlog2n() {

  // 입력값 기억
  const [input, setInput] = useState('');
  const [sorted, setSorted] = useState([]);

  const mergeSort = (arr) => {
    // 데이터가 1개 이하일 때
    if(arr.length <=1) return arr;
    // 중간 인덱스 번호 찾기
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left,right); // 함수 이용해서 정렬하고 결과 합쳐서 반환
  }
  const handleSort = () => {
    const arr = input.split(',')
                     .map(n=>Number(n.trim()))
                     .filter(n => !isNaN(n))
    const result = mergeSort(arr);
    setSorted(result);
  }
  return (
    <div>
      <h4>선형 로그 시간 복잡도</h4>
      <h6>Merge Sort</h6>
      <p>입력 배열 (쉼표로 구분):</p>

      <input type='text'
             value={input}
             placeholder='예: 5,2,4,8'
             onChange={e => setInput(e.target.value)}/>
      <button onClick={handelSort}>
        정렬
      </button>
      {
        sorted.length > 0 && (
          <div>
            <p>정렬 결과 : {JSON.stringify(sorted)}</p>
            </div>
        )
      }
    </div>
  )
}

/**
 선형 로그 시간 복잡도
 - 한번 전체 순회(n) 하면서 그 안에서 또 반씩 줄이는 (log n) 작업을 반복할 때 발생하는 시간 복잡도
 - 정렬 알고리즘 (병합 정렬, 퀵 정렬)에서 등장하고 n이 커져도 호율적으로 정렬 가능
 - 데이터를 쪼개고 -> 정렬하고 -> 합치는 분할 정복 방식 사용

 - 병합정렬 기준
  배열의 중간 인덱스
  배열은 계속 반으로 나누면서 기준 바뀜

 */