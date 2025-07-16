import React, { useState } from 'react'

export default function Cospro5Test3() {
  const [speed, setSpeed] = useState('');
  const [cars, setCars] = useState('');
  const [fine, setFine] = useState(null);

  const handleGetCars = () => {
    const carArr = cars.split(',')
                       .map((car) => Number(car.trim()));
    const limit = Number(speed);
    console.log(carArr);
    const less = 0.1;
    const normal = 0.2;
    const many = 0.3;

    const lessFine = 3;
    const normalFine = 5;
    const manyFine = 7;

    const result = carArr.map((carSpeed) => {
      let count = 0;
      const over = carSpeed - limit;
      if(over>= limit*less && over< limit*normal){
        count += lessFine;
      } else if(over>= limit*normal && over<limit*many){
        count += normalFine;
      } else if (over>= limit*many){
        count += manyFine;
      }
      return count;
    })
    console.log(result);
    const total = result.reduce((acc, curr) => acc+=curr,0);
    setFine(total);

  }
  return (
    <section className='m-4 p-4 w-2xl bg-lime-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 3</h1>
      <div className='mt-4'>
        <label>규정 속도</label>
        <input type='number'
               value={speed}
               onChange={e => setSpeed(e.target.value)}
               placeholder='규정속도를 입력하세요'
               className='ml-2 border rounded' />
      </div>
      <div className='mt-4'>
        <label>차의 속도</label>
          <input type='text'
                value={cars}
                onChange={e => setCars(e.target.value)}
                placeholder='예) 110,89,200'
                className='ml-2 border rounded' />
            <button onClick={handleGetCars}
                    className='ml-2 px-2 bg-lime-500 text-white rounded cursor-pointer'>
              벌금 확인하기
            </button>
      </div>
      <div className='mt-2'>
        {fine !==null && (
          <p>총 벌금은 <b>{fine}</b>만원 입니다</p>
        )}
      </div>
    </section>
  )
}
