import React, { useState } from 'react'

export default function Test3() {

  const num1 = 4;
  const num2 = 7;
  const [result, setResult] = useState(null);

  const calculator = (n1,n2) => {
    const arr = [];
    for(let i=n1; i<=n2; i++){
      if(i%2===0){
        arr.push(i);
      }
    }
    console.log(arr);
    let total = arr.reduce((acc, cur) => acc + cur**2,0);
    setResult(total);
  }

  const handleClick = () => {
    //함수실행
    calculator(num1,num2);
  }
  return (
    <div className='w-2xl p-4 bg-violet-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 3</h1>
      <div className='p-4'>
        <p className='mb-2 text-lg'>두 자연수 : {num1}, {num2}</p>
        <button onClick={handleClick}
                className='mb-2 px-2 bg-white rounded'>
          확인하기
        </button>
        { result!==null && (
          <p className='text-lg'>짝수들의 제곱의 합 : {result}</p>
        )}
        
      </div>
    </div>
  )
}
