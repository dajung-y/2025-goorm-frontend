function intEx(){
  localStorage.setItem("integer", 1);
}

// 로컬 스토리지
// 문자열(string) 타입만 저장가능

// casting(형변환)
// 숫자로 입력해도 문자로 저장 (묵시적 형변환)
function intLoad(){
  const intLoad = localStorage.getItem("integer");
  console.log(`정수 : ${intLoad}`);
  console.log(`타입 : ${typeof intLoad}`);
}

function arrayEx(){
  localStorage.setItem("arrayEx", JSON.stringify("['🍓','🍉','🍑']"));
}

function arrayLoad(){
  const arrayLoad = localStorage.getItem("arrayEx");
  console.log(`배열 : ${arrayLoad}`);
  console.log(`타입 : ${typeof arrayLoad}`);
  const getFruits = JSON.parse(arrayLoad);
  console.log(`변경된 타입 : ${typeof Array(getFruits)}`);
}

// Uncaught SyntaxError: Unexpected token '�', "🍓,🍉,🍑" is not valid JSON
// 문자열로 바꾸지 않은 상태에서 문자열로 가져오려고 해서 생기는 에러
// JSON.stringify("['🍓','🍉','🍑']") -> 저장할 때도 문자열로 지정

// 로컬 스토리지는 모두 문자열로 저장되기 때문에 Object값 받아와서 Array 로 변환

/*
  JSON (JavaScript Object Notation)
- 자바스크립트 객체 형식을 문자열로 변경하는 것
- python, java, C# 과 통신 가능
- API 요청/응답, DB 저장 등에 사용
- key:Value 형식으로 데이터 저장하는 구조
- 문자열 형태로 구조화하여 저장하거나 전송
- 자바스크립트의 객체처럼 생긴 문자열

- 문자열로 저장된 JSON 데이터를 다시 자바스크립트 객체로 변환하는 함수
*/

// 회원가입
// 아이디, 비밀번호, 이메일, 주소

// 한 번 만들고 끝
// n명에 대한 데이터 저장할 때 오브젝트 객체 n개 필요함
const user = {
  userId : "hello",
  userEmail : "hello@hello.com"
}

// class - 틀 만들어서 똑같은 형식
class UserInfo{
  
}

// localStorage에 객체 배열 저장
