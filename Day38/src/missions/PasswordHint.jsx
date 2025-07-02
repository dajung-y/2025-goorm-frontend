import React, { useState } from 'react'

export default function PasswordHint() {

  // 힌트 배열
  const hints = ["apple", "banana", "carrot", "grape", "melon", "orange", "peach"];

  // 입력값 저장
  const [input, setInput] = useState('');
  // 결과값 저장
  const [result, setResult] = useState(null);

  // 이진탐색 함수
  const binarySearch = (arr, str) => {
    let left = 0;
    let right = arr.length-1;

    // 오른쪽 인덱스가 왼쪽 인덱스보다 크거나 같을때까지 실행
    while (left<=right) {
      const mid = Math.floor((left + right)/2);

      // 같으면 mid 인덱스 반환
      if(arr[mid] === str) return mid;

      if(arr[mid] > str) right = mid-1;
      else left = mid +1;

    }
    return -1; // 해당하는 값 없음
  }

  const handleSearchHint = () => {
    const keyword = input;

    // 공백 없는 문자열일때 실행
    try{
      if(keyword.trim() !=='' && typeof keyword === 'string'){

        // 이진탐색 시작, 해당하는 값의 인덱스 가져옴
        const index =  binarySearch(hints, keyword);
        // 결과값 저장
        setResult(index);
      } else {
        throw new Error('문자열을 입력하세요');
      }
    } catch(err){
      console.error(err.message);
      alert(err.message);
    }
  }

  return (
    <main className='flex flex-col items-center p-8 w-screen h-screen bg-indigo-50'>
      <h1 className='mb-8 text-3xl font-bold'>비밀번호 힌트 찾기</h1>
      {/* 입력 */}
      <section className='mb-4'>
        <input type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='문자열을 입력하세요'
                className='p-1 bg-white rounded'/>
        <button onClick={handleSearchHint}
                className='ml-2 px-2 py-1 bg-white text-indigo-700 rounded cursor-pointer'>
          입력
        </button>
      </section>
      {/* 출력 */}
      <section>
        {
          result !== null && (
            <p className='w-full h-full bg-white p-2 rounded text-lg'>
              { result === -1 ? `🥹힌트 없음` : `🤗힌트 발견`}
            </p>
          )
        }
      </section>
    </main>

  )
}
