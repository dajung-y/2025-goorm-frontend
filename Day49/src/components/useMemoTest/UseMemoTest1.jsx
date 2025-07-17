import React, { useMemo, useState } from 'react'

export default function UseMemoTest1() {
  const [count,setCount] = useState(0);
  const [other, setOther] = useState(false);

  // 카운트 값이 변경될 때만 계산 실행
  const double = useMemo(() => {
    console.log('계산 실행됨');
    return count*2;
  }, [count]);
  return (
    <div>
      <h3>useMemo 예제</h3>
      <p>count: {count}</p>
      <p>2배 값: {double}</p>
      <button onClick={() => setCount((prev) => prev + 1)}
              className='px-2 bg-green-300 rounded cursor-pointer'>
        +1</button>
      <button onClick={() => setOther(!other)}
              className='px-2 bg-blue-300 rounded cursor-pointer'>
        다른 상태 변경</button>

    </div>
  )
}

/**
 useMemo
 - 비용이 많이 드는 계산 결과를 캐시 가능
 - 계산 결과를 기억(메모이제이션) 해주는 훅

 사용 이유
 - JSX 안에 map, filter, sort, reduce 처럼 연산이 많은 작업이 반복되면 렌더링마다 계속 계산됨
 - 이를 방지하기 위해 useMemo로 결과만 기억해서 다시 계산하지 않음
 사용하지 않으면
 - 렌더링 할 때마다 리스트 필터링, 정렬 계산 반복
 */