import React, { useState } from 'react'

export default function Cospro4Test6() {

  const [points, setPoints] = useState('');
  const [availablePoints, setAvailablePoints] = useState(null);

  const handleGetPoint = (e) => {
    e.preventDefault();
    setPoints(Number(points));
    if(points<1000){
      alert('1000포인트 이상부터 사용 가능합니다');
      setPoints('');
      return ;
    }
    const result = points-(points%100);
    setAvailablePoints(result);
    setPoints('');
  }
  return (
    <section className='m-4 p-4 w-2xl bg-fuchsia-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 6</h1>
      {/* 입력 */}
      <div className='mt-4'>
        <form onSubmit={handleGetPoint}>
          <label>포인트 입력</label>
            <input type='text'
                  value={points}
                  onChange={e=>setPoints(e.target.value)}
                  placeholder='포인트를 입력하세요'
                  className='ml-2 border rounded' />
            <button type='submit'
                    className='ml-2 px-2 bg-fuchsia-400 text-white rounded cursor-pointer'>
              확인하기
            </button>
        </form>
      </div>
      {/* 출력 */}
      <div className='mt-2'>
        { availablePoints!== null && (
          <p>최대 사용 가능한 포인트는 <b>{availablePoints}</b>입니다</p>
        )}
      </div>
    </section>
  )
}
