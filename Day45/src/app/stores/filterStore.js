import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useFilterStore = create((set) => ({
  filter: 'all', // all, active, completed
  setFilter: (filter) => set({filter}),
}));

// 미들웨어 기능을 추가한 스토리지 생성
// persist : name 속성의 이름으로 브라우저 로컬 스토리지에 JSON 형태로 상태 저장, 복원
const useStore = create(
  persist(
    (set,get) => ({}),
    {name : 'my-app-storage'}
  )
)

// immer 를 사용한 스토어 생성
const useStoreImmer = create(
  immer((set,get) => ({
    todos: [],
    addTodo: (text) => 
      set((state) => 
        {state.todos.push({text, done:false})})
  }))
);

// devtools를 사용한 스토어 생성
// devtools(persist(immer(...)))
const useStoreDev = create(
  devtools((set,get) => ({
    count:0,
    increment: () => set({count: get().count+1}),
  }), {name: 'counter-store'})
);

// 위 미들웨어 모두 합친 스토어 생성
const useTotalStore = create(
  devtools(
    persist(
      immer((set,get) => ({
        // 상태와 액션 작성
      }))
    ),
    {name: 'total-store'},
  )
)

/**
 대규모 앱으로 가면 추가적으로 생각해야하는 문제
 - 도메인(Feature) 단위 폴더링
 - 타입스크립트 적용
 - 미들웨어 활용 : 로컬스토리지 동기화, immer 불변성 관리, devtools 연동
 - API 연동 : React Query나 Axios 인터셉터와 결합해서 서버 상태관리

 미들웨어
 - 스토어(상태 관리 조직)와 실제 사용 코드 사이에 끼워넣는 특별한 부가 기능을 수행하는 장치
 - dispatch 함수와 reducer 사이에 끼워들어 추가적인 작업을 하는 함수
   ex) 비동기 작업처리
       어떤 액션이 발생했는지 콘솔에 출력
       에러 핸들링(디버깅)
   dispatch -> 미들웨어 통과 -> reducer state 변경



 - zustand 사용할 때 3가지 기능
   로컬스토리지 동기화(persist)
   - 상태를 브라우저 로컬스토리지에 자동으로 저장
   - 페이지를 새로고침해도 (또는 브라우저를 껐다 켜도) 마지막 상태 그대로 복원

   웹 사이트에서 버튼 클릭시
   요청(request) -> 처리(핵심 로직) -> 응답(response)
   이 사이에 로그 남기기, 권한 확인, 에러 처리
   매번 하면 불편하니까 자동으로 처리해주는 것이 미들웨어

   immer
   - set함수 안에서 마치 상태를 직접 수정하듯 코드를 쓰면 내부적으로 불변성을 지켜주는 방식으로 처리
   - 객체, 배열을 복사해서 새로운 상태를 만드는 번거로운 코드를 줄여주고 실수 방지

   devtools
   - 리덕스 devtools 와 같이 외부 개발 도구를 연결해서 상태 변화 이력을 타임라인 형태로 볼 수있게 해줌
   - 액션이 언제, 어떻게 발생했는지 한 눈에 파악 가능, 버그 추적이 휠씬 쉬워진다
 */