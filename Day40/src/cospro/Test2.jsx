import React, { useState } from 'react'

export default function Test1() {

  const testArr=[2,3,6,9,12,15,10,20,22,25];
  const [count3, setCount3] = useState(0);
  const [count5, setCount5] = useState(0);
  const [result,setResult] = useState(null);

  const countNum = (arr, length) => {
    let cnt3=0;
    let cnt5=0;
    for(let i=0; i<length; i++){
      if(arr[i]%3 ===0){
        cnt3++;
      } else if (arr[i]%5 ===0) {
        cnt5++;
      }
    }
    setCount3(cnt3);
    setCount5(cnt5);
    setResult(cnt3 >= cnt5 ? (cnt3===cnt5 ? 'same': 'three') : 'five');
  }

  const handleClick = () => {
    countNum(testArr,testArr.length);
  }
  return (
    <div className='w-2xl p-4 bg-violet-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 2</h1>
      <div className='p-4'>
        <p className='mb-2 text-lg'>배열 : {JSON.stringify(testArr)}</p>
        <button onClick={handleClick}
                className='mb-2 px-2 bg-white rounded'>
          확인하기
        </button>
        { result!==null && (
          <p className='text-lg'>{result}</p>
        )}
      </div>
    </div>
  )
}
