import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

  // 1. slice 정의
  // createSlice() : redux의 상태 + reducer 쉽게 만드는 함수
  // reducers : key 상태를 바꾸는 함수
  const counterSlice = createSlice({
    // state들
    name: 'counter',
    initialState: {value:0},
    // reducer (상태 변화 함수)
    reducers:{
      increment : (state) => {state.value +=1},
      decrement : (state) => {state.value -=1}
    }
  });

const {increment, decrement} = counterSlice.actions;

// 앱 전체에서 사용할 상태 저장소(store)
// 여러개의 slice가 있다면 reducer : {a,b,c}처럼 관리
export const store = configureStore({
  reducer : {
    counter : counterSlice.reducer,
  }
});

export default function ReduxBasic() {


  // 2. 카운터 컴포넌트
  // useDispatch() : redux 액션을 실행하는 훅
  const dispatch = useDispatch();
  // useSelector() : 저장소 값을 읽음
  const count = useSelector((state) => state.counter.value);


  return (
    <div>
      <h1>Redux</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+ 증가</button>
      <button onClick={() => dispatch(decrement())}>- 감소</button>
    </div>
  )
}

/**
 Redux
 - 전역 상태를 관리하는 라이브러리
 - npm install @reduxjs/toolkit react-redux
 - 여러 컴포넌트들이 공유해야하는 데이터를 한 곳에서 관리하는 중앙 저장소(store)를 만들어주는 도구
 - 가장 오래된 리액트 상태 관리 라이브러리 중 하나
 - 상태를 변경하려면 반드시 action -> reducer -> store
 
 store - 앱 전체 상태를 담는 중앙 저장소
 slice - 상태(state) + 상태 변경 함수(reducer)를 하나로 관리하는 단위
 dispatch - 액션을 발생시키는 함수
 useSelector - store에서 현재 상태를 가져오는 함수

 실행 순서
 1. 사용자가 어떤 행동(클릭 등)을 함
 2. Action을 생성 -> state 변경할거야!
 3. Dispatch 함 -> action이 store로 전달됨
 4. reducer가 action을 보고 상태를 업데이트 함
 5. store가 업데이트된 상태를 컴포넌트에 전달


 Redux 사용 이유
 - 상태 흐름이 명확함
 - 복잡한 앱에서도 상태 추적이 쉬움
 - 강력한 미들웨어 생태계
 
 Redux 사용 시기
 - 앱의 규모가 크고, 상태가 여러 컴포넌트에서 공유하거나 비동기 처리와 디버깅이 중요한 프로젝트에 적합

 reduxjs/tookit
 - boilerplate 반복적으로 복붙하는 구조를 줄이고 적은 코드로 redux와 동일한 결과를 나타내기 위해서 사용
 - 타입스크립트랑도 호환성 좋음
 - 실무 프로젝트에서 적합하고 규칙 기반의 상태관리를 쉽게 구현할 수 있음

 Recoil
 - 페이스북에서 만든 리액트 전용 상태관리 라이브러리
 - React useState처럼 다루지만 전역 상태처럼 공유 가능
 - 상태를 나눌 때 atom 단위로 나누고 여러 컴포넌트에서 이 atom 사용 가능

 Zustand
 - Context API를 대체할 수 있는 가벼운 상태 관리 라이브러리
 - 훅 기반 구조로 매우 직관적
 - redux보다 가볍고, 설정이 거의 없음
 */