// Map
// - 배열의 각 요소를 순회하면서 함수를 적용한 결과를 새로운 배열로 반환하는 함수
// - 원본 배열은 변경되지 않고, 항상 새로운 배열 반환
let numbers = [1,2,3];
let newNumbers =[];
numbers.forEach(n => {
  newNumbers.push(n*2);
})

console.log(newNumbers);

let mapNumbers = numbers.map(n=>n*2);
console.log(mapNumbers);

let fruits = ['사과', '포도', '바나나'];
let copyFruits = fruits.map(e=>'⭐️'+e);
console.log(copyFruits);

let names = ['성규', '우현', '연준'];
let indexNames = names.map((singer,index) => `${index+1}. ${singer}`);
console.log(indexNames);