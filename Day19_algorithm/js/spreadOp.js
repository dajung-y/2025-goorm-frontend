// ...스프레드 연산자
// 배열이나 (Array) 또는 객체(Object) 안에 있는 값을 펼쳐서 다른 배열이나 객체에 넣어주는 역할
// 배열 앞에 ...를 붙이면 배열 내부의 요소들을 개별 값으로 분리
// 객체 앞에 ...를 붙이면 객체의 Key,Value 쌓으로 분리
// 쉽게 배열을 합치거나 객체 복사 및 병합을 할 수있음

const fruits = ['🍑','🍓','🍉'];

const newFruits = ['🍇',...fruits,'🍎'];
console.log(newFruits);

// user 객체 안에 프로퍼티를 모두 펼쳐서 새로운 객체 만든 뒤 city 추가
const user = {
  name: '성규',
  age: 10
};

const userCopy = {
  ...user,
  city: '서울'
};

console.log(userCopy);

// 프론트엔드에서 스프레드를 사용하는 이유
// - 상태나 기록같은 자주 쓰이는 원본을 직접 바꾸면 버그가 생기기 쉬움