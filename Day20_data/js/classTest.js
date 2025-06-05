// 1. 은행계좌 클래스
//    owner, balance

class Account{
  constructor(owner, balance){
    this.owner = owner;
    this.balance = balance;
  }
}

const a = new Account('김성규',100000);
console.log(a);
const b = new Account('최연준', 20000);
console.log(b);

// 2. 게시판 클래스
// board
// title, author, content

class Board{
  constructor(title, content, author){
    if(!title || !content) console.log('제목과 내용을 입력하세요');
    if(!author) author="익명";
    this.title = title;
    this.content = content;
    this.author = author;
  }
}

const boardTest1 = new Board('제목1','내용1','작성자1');
console.log(boardTest1);

const boardTest2 = new Board(null,'내용2','작성자2');
console.log(boardTest2);

const boardTest3 = new Board();
console.log(boardTest3);








/*
  비동기 통신
  - 사용자가 서버에 요청을 보낸 뒤, 응답이 오기 전까지 기다리지 않고 다른 작업을 계속할 수 있는 방식

  - 페이지가 멈추지 않고 결과를 받아올 수 있음
  - 새로고침하지 않아도 데이터를 실시간으로 보여줄 수 있음

  fetch(주소)
  then() - 요청한 데이터가 정상적으로 들어왔다면 실행
  catch() - 만약 예외가 발생했을 때 처리

*/

// 1. jsonplaceholder 예제 사이트에서 데이터 다운

// 주소 연결
fetch('https://jsonplaceholder.typicode.com/users')
  // 연결이 되었을 때
  // status 상태 코드가 200이면 정상적으로 다운
  .then(response => {
    console.log(response.json()) 
    // 자바스크립트 객체로 변환하면서 Promise 객체로 변환
  
  })
  .catch();
  