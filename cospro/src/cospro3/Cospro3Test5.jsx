import React, { useState } from 'react'

export default function Cospro3Test5() {
  const [ages, setAges] = useState('');
  const [transports, setTransports] = useState('');
  const [result, setResult] = useState(null);

  const handleSelectTransport = (e) => {
    setTransports(e.target.value);
  }

  const calculateFare = (arr,len, adultFare, childFare) => {
    let total = 0;
    if(len>=10){
      for(let i=0; i<len; i++){
        if(arr[i]>=20) total+=(adultFare*0.9);
        else total +=(childFare*0.8);
      }
    } else {
      for(let i=0; i<len; i++){
        if(arr[i]>=20) total+=adultFare;
        else total += childFare;
      }
    }
    setResult(total);
  }

  const handleGetPrice = () => {
    if(!transports) {
      alert('교통수단을 선택하세요');
      return;
    }
    const ageArr = ages.split(',')
                        .map(s => Number(s.trim()));
    console.log(ageArr);

    switch(transports){
      case 'bus':
        return calculateFare(ageArr, ageArr.length, 40000, 15000);
      case 'ship':
        return calculateFare(ageArr, ageArr.length, 30000, 13000);
      case 'airplane':
        return calculateFare(ageArr, ageArr.length, 70000, 35000);
    }
  }
  return (
    <section className='m-4 p-4 w-2xl bg-rose-100 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 5</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <label>나이 입력</label>
        <input type='text'
               value={ages}
               onChange={e => setAges(e.target.value)}
               placeholder='예 ) 40, 43, 12, ...' 
               className='ml-2 border rounded'/>
        <label className='ml-4'>Bus</label>
        <input type='radio'
               name='transport'
               value='bus'
               onClick={handleSelectTransport}
               className='ml-1' />
        <label className='ml-2'>Ship</label>
        <input type='radio'
               name='transport'
               value='ship'
               onClick={handleSelectTransport}
               className='ml-1' />
        <label className='ml-2'>Airplane</label>
        <input type='radio'
               name='transport'
               value='airplane'
               onClick={handleSelectTransport}
               className='ml-1' />
        <button onClick={handleGetPrice}
                className='ml-2 px-2 bg-rose-400 text-white rounded cursor-pointer'>
          총액 계산하기
        </button>
        {/* 출력 */}
        {result !==null && (
          <p className='mt-2'>총 교통비는 {result.toLocaleString()}원 입니다</p>
        )}
      </div>
    </section>
  )
}
