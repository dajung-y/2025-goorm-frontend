import MoviePage from "./pages/MoviePage"


function App() {


  return (
    <>
      <MoviePage />
    </>
  )
}

export default App

/**
nested routes
- 리액트에서 중첩해서 설정하는 방식
- 부모 컴포넌트가 있고 기본 레이아웃도 있고 그 안에서 자식 라우트가 일부 화면만 교체해주는 구조

  마이페이지 안에 profile, settings
  부모 - mypage
  자식 - profile, settings

- 레이아웃 안에 페이지가 들어가는 구조
- 하위 자식페이지는 경로에 /안씀

API (Application Programming Interface)
- 시스템이나 프로그램 간의 데이터를 교환하는 방식
- 다른 프로그램에 정보 요청하고 결과 받아오는 통신
  JSON 파일 (key, value)
  통신할 때 http 상태 코드
  정상 코드 : 200
  에러 코드 : 400 - 내 문제, 500 - 서버 문제
            404 -> 100% 경로설정 잘못
            500 -> 100% 서버 내부에 문제

REST 방식
- HTTP 기반의 가장 널리 사용되는 웹 API 스타일
- JSON 자바스크립트의 object 처럼 key, value 사용
  모두 문자열로 표현
- 프론트엔드에서 가장 많이 사용하는 API 형식

1. 요청하는 url
  url의 핵심 개념
  ? 앞까지 url 주소
  & 는 연결고리. 변수 여러개를 보내야될 때
 */


{/* <Routes>
<Route path="/mypage" element={<Mypage />} >
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

</Routes> */}

// function getData(){
//   setTimeout(()=> {
//     return '데이터 도착'
//   },1000);
// }

// function getDataPromise(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('데이터 도착');
//     },1000)
//   });
// }

// // promise 사용

// // 실행순서
// // 1. useEffect() 실행
// // 2. getDataPromise() 실행
// // 3. 함수 내부 실행
// // 4. 프로미스 객체 생성
// // 5. 데이터 도착후 then으로 보냄

// useEffect(() => {
//   getDataPromise()
//   .then((result)=> {
//     console.log(result);
//     console.log('실행완료');
//   })
// },[])

  // // 페이지를 자동으로 이동하기 위해 사용하는 것
  // // 컴포넌트 함수의 최상단에서 호출해야 정상적으로 작동
  // const navigate = useNavigate();



  // // async, await
  // // - async 항상 promise 반환
  // // - 내부에서 await 사용해서 비동기 흐름을 잠시 순서대로(동기처럼) 처리

  // // await
  // // - promise가 완료될 때까지 기다리는 키워드
  // // - async 안에서만 사용가능


  // async function goStore() {
  //   console.log('문 열고 들어감');
  //   await wait(2000);
  //   console.log('계산하고 나옴');
  // }

  // function wait(ms){
  //   return new Promise(resolve => {
  //     setTimeout(resolve,ms)
  //   })
  // }