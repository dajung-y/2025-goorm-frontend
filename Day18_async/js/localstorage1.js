/*
localstorage

 - 사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
 - key:value 구조로 데이터 저장
 - 브라우저를 꺼도 유지되며 동기적으로 처리
 - 브라우저 속 메모장 느낌
 단점
 - 저장용량이 작음(5MB), 보안에 민감한 정보는 저장하면 안됨

 setItem(key, value);
 - 로컬 스토리지에서 key는 중복 불가능

*/

// localStorage.setItem("이름","김성규");
// const localName = localStorage.getItem("이름"); // 값 변경되면 안되기 때문에 const 사용
// console.log(`스토리지 이름 : ${localName}`);

// 아이디
function save(){
  localStorage.setItem("id","1");
}

function load(){
  // 스토리지에서 꺼내기
  const localId = localStorage.getItem("id");
  // alert창에 넣어서 보이기
  alert(localId);
}

// 비밀번호
function pwSave(){
  const pwInput = document.getElementById('password');
  localStorage.setItem("password",pwInput.value);
}

function pwLoad(){
  const password = localStorage.getItem("password");
  const result = document.getElementById('result');
  result.innerText = password; 
}

// 이메일
function saveEmail(){
  const emailInput = document.getElementById('email');
  setTimeout(()=>{
    localStorage.setItem("email",emailInput.value);
    alert('이메일이 저장되었습니다');
    emailInput.value = '';
  },3000);
}


// 타이머
setInterval(()=>{
  const clock = document.getElementById('clock');
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const fomatTime = `${hour} : ${minute} : ${second}`;
  clock.innerText = fomatTime;
},1000);
