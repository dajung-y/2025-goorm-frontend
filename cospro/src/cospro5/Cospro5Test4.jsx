import React, { useState } from 'react'

export default function Cospro5Test4() {
  const [teakwondo, setTeakwondo] = useState('');
  const [runnig, setRunnig] = useState('');
  const [shooting,setShooting] = useState('');
  const [totalScore, setTotalScore] = useState(null);

  const handleGetScores = () => {
    setTeakwondo(Number(teakwondo));
    setRunnig(Number(runnig));
    const shootArr = shooting.split(',')
                             .map((shoot) => Number(shoot.trim()));
    const teakwondoStandard = 25;
    const teakwondoScore = 8;
    const runningStandard = 60;
    const runningScrore = 5;
    const maxScore = 250;
    const extraScore = 100;
    let count = 0;

    // 태권도 계산
    if(teakwondo>=teakwondoStandard){
      count += maxScore;
    } else {
      count += teakwondo* teakwondoScore;
    }
    console.log('태권도',count);
    // 달리기 계산
    if(runnig===runningStandard){
      count +=maxScore;
    } else if(runnig >runningStandard){
      count += maxScore - (runnig-runningStandard)* runningScrore;
    } else {
      count += maxScore + (runningStandard-runnig)* runningScrore;
    }
    console.log('태권도+달리기', count);
    // 사격 계산
    const shootingScores = shootArr.reduce((acc,curr) => acc+curr,0);
    count +=shootingScores; 
    console.log('태권도+달리기+사격',count);
    // 추가점수 계산
    const count10 = shootArr.filter((shoot) => shoot>=10).length;
    console.log('사격 10점 count',count10);
    if(count10>=7){
      count +=extraScore;
    }
    console.log('태권도+달리기+사격+추가점수', count);
    setTotalScore(count);
  }
  return (
    <section className='m-4 p-4 w-2xl bg-lime-50 rounded-2xl'>
      <h1 className='text-2xl font-bold text-center'>문제 4</h1>
      <div className='mt-4'>
        <label>태권도</label>
        <input type='number'
               value={teakwondo}
               onChange={e=>setTeakwondo(e.target.value)}
               className='ml-2 mr-2 border rounded' />
        <label>달리기</label>
        <input type='number'
               value={runnig}
               onChange={e=>setRunnig(e.target.value)}
               className='ml-2 border rounded' />
      </div>
      <div className='mt-4'>
      <label>사격</label>
        <input type='text'
               value={shooting}
               onChange={e=>setShooting(e.target.value)}
               placeholder='예) 10,7,8,6'
               className='ml-2 border rounded' />
        <button onClick={handleGetScores}
                className='ml-2 px-2 bg-lime-500 text-white rounded cursor-pointer'>
          점수 확인하기
        </button>
      </div>
      <div className='mt-4'>
        { totalScore!==null && (
          <p>총 점수는 <b>{totalScore}</b>점 입니다</p>
        )}
      </div>
    </section>
  )
}
