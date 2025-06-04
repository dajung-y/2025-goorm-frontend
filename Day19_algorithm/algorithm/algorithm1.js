let arr1 = [4,2,1,3,9,5,6];
let arr2 = [7,6,5,4,3,2,1];
let arr3 = [8,6,3,3,4,1,5,7];

function solution(arr,m){
  // 정렬
  arr.sort((a,b) => a-b);
  // 계산
  let sum = 0;
  for(let i =1; i<arr.length; i++){
    if(i%m === 0)
      sum += arr[i];
  }
  console.log(`${m}의 배수 인덱스 합: ${sum}`);
}

solution(arr1,3);
solution(arr2,3);
solution(arr3,2);