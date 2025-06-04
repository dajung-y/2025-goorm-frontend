/*
자료구조
- 데이터를 어떤 방식으로 저장하고 불러올지 정하는 툴

알고리즘
- 데이터를 어떤 순서와 방식으로 처리할지 정하는 방법

사용자가 빠르고 효율적으로 웹을 사용할 수 있도록 만들어주는 것
*/


// stack
// 나중에 넣은 것 부터 먼저 꺼내는 구조
// 프론트엔드에서는 실행취소, 페이지 이동 히스토리, 브라우저 뒤로가기 등에서 많이 사용

let history = [];

function addHandle(){
  const value = prompt('추가할 작업 :');
  if(value) add(value); // 예외처리 - 비정상적인 값이 들어갔을 때 프로그램이 멈추는 현상
}

function add(value){
  history.push(value);
  console.log(history);
  renderStack();
}

function undo(){
  // 삭제 전 예외처리
  if(history.length === 0){
    alert('취소할 작업이 없습니다');
    return; // 함수 종료
  }
  const removed = history.pop();
  renderStack();
  alert(`삭제한 값 : ${removed}`);
}

// 위에서 추가한 내용을 html에 스택 쌓는 명령 구현하는 함수
function renderStack(){
  const stackBox = document.querySelector('.stack-box');
  stackBox.innerHTML = '';
  [...history].reverse().forEach(item => {
    const div = document.createElement('div');
    div.className = 'stack-item';
    div.textContent = item;
    stackBox.appendChild(div);
  });
}


// Queue
// 먼저 들어간 것부터 먼저 꺼내는 구조

let queue = [];


function addQueueHandle(){
  const alertText = prompt('알림 내용 입력 :');
  // 예외처리
  if(alertText){
    queue.push(alertText);
    renderQueue();
  }
}

function renderQueue(){
  const queueBox = document.querySelector('.queue-box');
  queueBox.innerHTML ="";
  queue.forEach(item =>{
    const div = document.createElement('div');
    div.className = "queue-item";
    div.textContent = item;
    queueBox.appendChild(div);
  });
}

function removeQueue(){
  if(queue.length>0){
    alert(`처리된 알림: ${queue.shift()}`);
    renderQueue();
  } else{
    alert('처리할 알림이 없습니다');
  }
}



/*
  ...스프레드 연산자
  - 배열을 복사하거나 펼칠 때 사용

  reverse()
  - 배열의 순서 역순
*/