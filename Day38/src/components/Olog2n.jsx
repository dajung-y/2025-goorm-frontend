import React, { useState } from 'react'


export default function Olog2n() {

  const sortedNumbers = [3,6,9,12,15,18,21,24,27];
const [target,setTarget] = useState('');
// 결과 저장
const [result, setResult] = useState(null);

const binarySearch = (arr, target) => {
  // 중간 인덱스 찾아서 기준 잡음
  let left = 0;
  let right = arr.length-1;

  while (left<=right){
    const mid = Math.floor((left+right)/2)
    if(arr[mid] === target ){
      return mid; // 같은 경우 바로 반환
    } else if(target<arr[mid]){
      right = mid-1;
    } else {
      left = mid +1;
    }
  }
  return -1; // 못찾으면 -1 돌려줌
}

// 입력 값 저장
const handelSearch = () => {
  const num = parseInt(target);

  if(isNaN(num)){
    alert('숫자를 입력하세요');
    return;
  }
  const idx = binarySearch(sortedNumbers, num);
  setResult(idx);
}

  return (
    <div>
      <h4>숫자 찾기 게임</h4>
      <p>숫자 배열: {JSON.stringify(sortedNumbers)}</p>

      <input type='text'
             placeholder='숫자 입력'
             value={target}
             onChange={(e) => setTarget(e.target.value)} />
      <button onClick={handelSearch}>
        찾기
      </button>
      {
        result !== null && (
          <p>
            {
              result === -1 ? 'X 못찾음' : `찾았음! ${result}번째 위치에 있다!`
            }
          </p>
        )
      }
    </div>
  )
}

/**
 O(log2n) 로그 시간 복잡도
 - 입력값의 크기가 커질 수록 실행 시간이 로그만큼 짧아지는 알고리즘
 - n이 증가해도 실행 시간이 느리게 증가함
 - 데이터가 반씩 잘려나감
 - 대표적으로 이진탐색
 - 로그는 반씩 줄이는 구조
 - 이진 탐색은 정렬 필수
 - npm install lodash 이용해서 이진탐색 진행
 - 위의 라이브러리는 외부 라이브러리
 - 배열, 객체, 문자열등을 쉽고 빠르게 처리할 수 있는 함수들이 많음
 - 성능 최적화된 함수들이 많아서 복잡한 작업을 간단하게 만들 수 있음

 */