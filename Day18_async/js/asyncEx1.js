const alertBox = document.querySelector('.alert');

setTimeout(()=>{
  alertBox.style.display = 'none';
},5000);


// 호이스팅 문제 때문에 항상 실행문이 나오기 전에 위에 작성
function hello(){
  console.log('2초 뒤에 인사하기');
}

setTimeout(hello,2000);

/*
  setInterval() : 시간마다 반복해서 실행하는 함수
  - 타이머 아이디(식별자)를 생성
  - 콜백함수를 반복적으로 실행하도록 예약함

  반복 멈추는 함수
  clearInterval()
  - 타이머 아이디를 받음

*/
let count=0;
const timer = setInterval(()=>{

  console.log('👻');
  count++;
  if(count===20){
    clearInterval(timer);
    console.log('20초 지남');
  }
  
},1000);

// 비동기 처리구조 (이벤트 루프)
// - 비동기 작업들을 처리하기 위한 핵심 매커니즘
// - 자바스크립트 엔진은 call stack 이라는 호출 스택을 이용해서 동기코드를 순서대로 실행
// - 타이머(setTimeout), Ajax, Fetch, Dom이벤트(onclikc 등)같은 비동기 함수들은 호출스택에서 바로 실행되지 않음
// - web API 라는 브라우저가 제공하는 백그라운드 환경으로 전달

/*
순서 정리
1. 동기 코드(메인 스크립트) call stack에 차례로 쌓여서 실행
2. setTimeout, fetch, onclick 같은 비동기 호출시 web API로 전달
3. web API 작업 완료시 Event Queue에 콜백 보관
4. 이벤트 루프가 계속 call back 확인 -> 스택이 비어있으면 Event Queue에서 콜백 떠내서 call stack으로 이동
5. 이동된 콜백 함수 실행 
*/

/*
web API
XMLHttpRequest(AJAX)
- 서버와 비동기적으로 데이터를 교환할 수 있는 객체
*/