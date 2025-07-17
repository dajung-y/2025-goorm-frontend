import React, { useCallback, useState } from 'react'

// 자식 컴포넌트
// React.memo 감싸지 않으면 자식에게 데이터 전달할 때 똑같은 값을 전달해도 계속 렌더링
// React.memo()는 전달되는 값이 바뀌지 않으면 렌더링 안됨
const Child = React.memo(({onClick}) => {
  console.log('Child 렌더링');
  return <button onClick={onClick}
                 className='px-2 bg-blue-300 rounded cursor-pointer'>자식 버튼</button>
});

export default function UseCallbackTest1() {
  const [count, setCount] = useState(0);
  const handleChildClick = useCallback(() => {
    console.log('자식 버튼 클릭됨');
  },[]);
  return (
    <div>
      <h3>useCallback 사용 안했을 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev+1)}
              className='px-2 bg-green-300 rounded cursor-pointer'>
        부모 버튼(+)
      </button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  )
}

/**
 useCallback
 - 리레더링 될 때마다 함수 새로 만들지 말고 이전에 만든 함수를 기억해서 성능 최적화 해주는 리액트 훅
 - useCallback(fn,deps)
   fn : 기억하고 싶은 콜백함수
   deps : 이 값이 바뀔 때만 fn 새로 생성

 사용 이유
 - 리액트는 함수 컴포넌트가 렌더링될 때마다 함수 다시 만들어짐
 - 이로 인해 리렌더링 될 때마다 불필요하게 새로 생성, useEffect 있다면 의도치 않게 반복 실행됨
 
 사용 스타일
 - 자식 컴포넌트 최적화 : React.memo + useCallback
 - 이벤트 핸들러 고정

 장점
 - 성능 개선, 리렌더링 줄음, 함수 재생성 방지
 단점
 - 남용시 코드 복잡
 - 불필요한 사용은 오히려 메모리 낭비
 */

 /**
  const Child = React.memo(({onClick}) => {
  console.log('Child 렌더링');
  return <button onClick={onClick}
                 className='px-2 bg-blue-300 rounded cursor-pointer'>자식 버튼</button>
});

export default function UseCallbackTest1() {
  const [count, setCount] = useState(0);
  const handleChildClick = () => {
    console.log('자식 버튼 클릭됨');
  }
  return (
    <div>
      <h3>useCallback 사용 안했을 때</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev+1)}
              className='px-2 bg-green-300 rounded cursor-pointer'>
        부모 버튼(+)
      </button>
      <hr />
      <Child onClick={handleChildClick} />
    </div>
  */