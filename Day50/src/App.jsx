import React from 'react'
import useToggle from './components/customHook/useToggle'
import useInput from './components/customHook/useInput';
import useDebounce from './components/customHook/useDebounce';
import useWindowSize from './components/customHook/useWindowSize';
import useUser from './components/customHook/useUser';
import ReactQueryTest1 from './components/reactquery/ReactQueryTest1';
import ReactQueryTest2 from './components/reactquery/ReactQueryTest2';
import ReactQueryTest3 from './components/reactquery/ReactQueryTest3';


export default function App() {


  return (
    <>
      {/* <ReactHookTest1 /> */}
      {/* <ReactHookTest2 /> */}
      <ReactQueryTest3 />
    </>
  )
}

/**
 커스텀 훅(Custom Hook)
 - 컴포넌트 간에 상태 로직이나 사이드 이펙트 로직을 재사용할 때가 많음
   데이터를 불러오는 로직, 폼 입력을 처리하는 로직, 특정 이벤트 리스너를 추가하는 로직 등
   여러 컴포넌트에서 비슷하게 사용될 수 있음
 - use로 시작
 - 내가 직접 상태관리 만듦

 리팩토링
 - 기능을 그대로 유지하면서 코드를 더 읽기 쉽고 재사용 가능하게 정리하는 것

 사이드 이펙트(Side Effect)
 - 컴포넌트가 렌더링 외에 다른 상태를 변경하는 행위
 - 사이트 이펙트는 무조건 useEffect 안에서 처리

 커스텀 훅 나누는 기준
 - 중복된 로직 반복
   여러 컴포넌트가 같은 (useState, useEffect, fetch)쓰고 있다면 분리 대상
 - 사이드 이펙트 관리 (외부 API호출, 이벤트 리스너 등록 분리 대상)
 - 계산, 변환, 필터링 조직을 외부로 재사용 확보
 - react-query, swiper, form 등의 훅을 래핑해서 커스텀 제어
 */


//  export default function App() {
//   const [on,toggle] = useToggle();
//   const name = useInput('');
//   const debounced = useDebounce(name.value,500);
//   const {width,height} = useWindowSize();
//   const {user, loading} = useUser();
//   return (
//     <div>
//       <h3>useToggle 커스텀 훅</h3>
//       <p>토글 상태: {on ? '켜짐' : '꺼짐'}</p>
//       <button onClick={toggle}>변경</button>

//       <h3>useInput 커스텀 훅</h3>
//       <input {...name} placeholder='이름 입력' />
//       <p>입력값: {name.value}</p>
//       <button onClick={name.reset}>reset</button>

//       <h3>useDebounce 커스텀 훅</h3>
//       <input {...name} placeholder='검색어' />
//       <p>실시간 입력: {name.value}</p>
//       <p>디바운싱: {debounced}</p>

//       <h3>useWindowSize 커스텀 훅</h3>
//       <p>현재 창 크기: {width}px, {height}px</p>
//       <h3>useUser 커스텀 훅과 사이트 이펙트 예제</h3>
//       {
//         loading ?
//         (<p>Loading...</p>) :
//         (<p>{user.name}/ {user.email}</p>)
//       }
//     </div>
//   )
// }