// 동기식 처리
// console.log("1.시작");
// alert('2. 이 알림 닫아야 다음 코드 실행');
// console.log('3. 완료');

// 함수
function func1(){
  console.log("func1");
  func2();
}

function func2(){
  console.log("func2");

  for(let i=0; i<5; i++){
    console.log('👻');
  }

  func3();
}


function func3(){
  console.log("func3");
}

func1();

// 비동기(Asynchronous)
// - 시간이 오래 걸리는 작업을 따로 처리한 뒤 결과가 준비되면 나중에 다시 이어서 처리하는 방식
// - 동시에 여러 작업을 수행할 수 있게 함
// - 파일 읽기, 네트워크 요청, 타이머 등

// setTimeout : 일정 시간이 지나고 실행
console.log('1. 커피 주문');

// 콜백함수
// - 어떤 동작할지 작성

setTimeout(()=>{
  console.log('☕️');
},3000);

console.log('3. 다른사람 주문받기');