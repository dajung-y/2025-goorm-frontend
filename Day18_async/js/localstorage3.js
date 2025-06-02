// 객체
const obj ={
  name: 'Anna',
  age: 20
};

// 배열
const arr = [1,2,3];

// 객체, 배열을 JSON문자열로 변환
const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);

localStorage.setItem("person", objString);
localStorage.setItem("nums", arrString);

const personString = localStorage.getItem("person");
const numsString = localStorage.getItem("nums");

console.log(typeof personString);

// JSON 문자열을 객체, 배열로 변환
const personObj = JSON.parse(personString);
const numsArr = JSON.parse(numsString);

console.log(`personObj : ${personObj}, 타입 : ${typeof personObj}`);
console.log(`numsArr : ${numsArr}, 타입 : ${typeof numsArr}`);
