import React, { useState } from 'react'

export default function Test4() {

  const testArr = [1,2,3,3,1,3,3,2,3,2];
  const [result, setResult] = useState(null);

  const multiple = (arr) => {
    const map = new Map();

    for(let num of arr){
      // map에 num이 없으면 0, 있으면 기존 값 가져오기
      map.set(num, (map.get(num) ||0) +1);
    }
    console.log(map);
    // map에서 value 뽑기
    const fre = Array.from(map.values());
    console.log(fre);
    const max = Math.max(...fre);
    const min = Math.min(...fre);
    console.log(max, min);
    const mul = Math.floor(max/min);
    setResult(mul);   
  }

  const handlePrint = () => {
    multiple(testArr);
  }

  return (
    <section className='my-4 p-8 w-2xl bg-amber-50 rounded-2xl'>
      <h1 className='text-center text-2xl font-bold'>문제 4</h1>
      <div className='p-2'>
        <h3 className='mb-2 text-xl font-bold'>배열 : {JSON.stringify(testArr)}</h3>
        <button onClick={handlePrint}
                className='mb-2 px-2 bg-orange-400 rounded text-white cursor-pointer'>
          값 구하기
        </button>
        { result !== null && (
          <p className='text-xl'>{result}</p>
        )}
      </div>
    </section>
  )
}

/**
 배열에 있는 자연수들 중 가장 많이 등장한 숫자/ 적게 등장한 숫자 개수 비교
 몇 배 더 많은지 (정수만)

 입력값 - 배열
 출력값 - 가장 많이 등장한 수, 몇 배 많은지

 중요한 데이터 라벨 - 등장 횟수, 최대값, 최소값, 배수값

 문제 핵심 :
 등장횟수 카운트, 최대,최소값, 정수 배수 계산
 */