import React, { useState } from 'react'

export default function Test5() {

  const testArr = [1,4,2,3];
  const [reverseArr, setReverseArr] = useState([]);

  const reverse = (arr, length) => {
    for(let i=length-1; i>=0; i--){
      setReverseArr(prev => [...prev,arr[i]]);
    }
  }

  const handleReverse = () => {
    reverse(testArr,testArr.length);
  }

  return (
    <section className='my-4 p-8 w-2xl bg-amber-50 rounded-2xl'>
      <h1 className='text-center text-2xl font-bold'>문제 5</h1>
      <div className='p-2'>
        <h3 className='mb-2 text-xl font-bold'>원본 배열: {JSON.stringify((testArr))}</h3>
        <button onClick={handleReverse}
                className='mb-2 px-2 bg-orange-400 rounded text-white cursor-pointer'>
          reverse
        </button>
        {
          reverseArr.length>0 && (
            <p className='text-xl font-bold'>뒤집힌 배열 : {JSON.stringify(reverseArr)}</p>
          )
        }
      </div>
    </section>
  )
}
