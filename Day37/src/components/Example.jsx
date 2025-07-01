import React, { useState } from 'react'

export default function Example() {

  // 1번
  const [a,setA] = useState('');
  const [b, setB] = useState('');
  const [sum, setSum] = useState(null);
  const handleSum = () => {
    if(a && b){
      const num1 = parseInt(a);
      const num2 = parseInt(b);
  
      setSum(num1+num2);
    } else{
      alert('값을 입력하세요');
    }
    setA('');
    setB('');
  }

  // 2번
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');
  const [strResult, setStrResult] = useState('');
  const handleCompareStr = () => {
    if(str1 && str2){
      if(str1.length > str2.length) setStrResult(str1);
      else setStrResult(str2);
    } else {
      alert('값을 입력하세요');
    }
    setStr1('');
    setStr2('');
  }

  // 3번
  const [n,setN] = useState('');
  const [stars, setStars] = useState([]);
  const handleCreateStar = () => {
    if(n<1) alert('자연수를 입력하세요');
    const count = Number(n);
    const starArr = [];
    for(let i =count; i>0; i--){
      starArr.push('*'.repeat(i));
    }
    setStars(starArr);
    setN('');
  }

  // 4번
  const [str,setStr] = useState('');
  const [createdStr, setCreatedStr] = useState('');
  const handleChangeStr = () => {
    setCreatedStr('"'+str+'"')
    setStr('');
  }

  // 5번
  const [num,setNum] = useState('');
  const [absoluteNum,setAbsoluteNum] = useState('');
  const handleAbsoluteValue = () => {
    if(num){
      {num >=0 ? setAbsoluteNum(num) : setAbsoluteNum(-num)}
    }
    setNum('');
  }

  // 6번
  const [n1,setN1] = useState('');
  const [n2,setN2] = useState('');
  const [numResult, setNumResult] = useState('');
  const handleCompareNum = () => {
    if(n1 && n2){
      const num1 = Number(n1);
      const num2 = Number(n2);
      if(num1>num2){
        alert('두번째 숫자는 첫번째 숫자와 같거나 커야합니다');
        setN1('');
        setN2('');
        return;
      } else{
        num1===num2 ? setNumResult(num1+num2) : setNumResult(num2-num1)
      }
    }
  }

  // 7번
  const [number,setNumber] = useState('');
  const [printInt, setPrintInt] = useState([]);
  const handlePrintInt = () => {
    if(number<1){
      alert('자연수만 입력 가능합니다');
      setNumber('');
      return;
    } else{
      const count = Number(number);
      const intArr = [];
      for(let i=1; i<=count; i++){
        intArr.push((i));
      }
      setPrintInt(intArr);
    }
  }

  // 8번
  const [arrLeng, setArrLeng] = useState('');
  const [arrVal, setArrVal] = useState('');
  // 배열에 값 넣은 것
  const [createdArr, setCreatedArr] = useState([]);
  const [subArrResult, setSubArrResult] = useState([]);


  const handleCreateArr = () => {
    if(arrLeng<2){
      alert('2 이상 입력 가능합니다');
      setArrLeng('');
      return;
    }
    console.log('배열의 크기', arrLeng);
  }

  // 연산하는 함수
  const arrSub = (arr) => {
    const subArr=[];
    for(let i=1; i<arr.length; i++){
      subArr.push(arr[i-1]-arr[i]);
    }
    console.log(subArr);
    return(subArr);

  }
  const handleArrSub = () => {
    // 문자열 -> 배열 -> 숫자
    const arr = arrVal.split(',').map((val) => Number(val));
    // arrLeng Number로 바꿔야 !== 사용 가능
    if(arr.length !== Number(arrLeng) ){
      alert('배열의 크기만큼 값을 입력하세요');
      setArrVal('');
      return;
    }
    console.log(arr);
    setCreatedArr(arr);
    const result = arrSub(createdArr);
    console.log('result :' ,result);
    setSubArrResult(result);
  };
  
  
  return (
    <main className='p-4 bg-rose-50'>
      <p className='text-3xl font-bold'>📝문제</p>
      {/* 1번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 1 : 두 숫자 더하기</p>
        <input type='text'
               value={a}
               onChange={(e) => setA(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='border' />
        <input type='text'
               value={b}
               onChange={(e) => setB(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='ml-2 border' />
        <button onClick={handleSum}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          더하기
        </button>
        <p className='font-bold'>결과 : {sum}</p>
      </section>
      {/* 2번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 2 : 긴 문자열 찾기</p>
        <input type='text'
               value={str1}
               onChange={(e) => setStr1(e.target.value)}
               placeholder='문자열을 입력하세요'
               className='border'/>
        <input type='text'
               value={str2}
               onChange={(e) => setStr2(e.target.value)}
               placeholder='문자열을 입력하세요'
               className='ml-2 border'/>
         <button onClick={handleCompareStr}
                className='ml-4 px-4 py-2 bg-amber-100 rounde cursor-pointer'>
          비교하기
        </button>
        <p className='font-bold'>결과: {strResult}</p>
      </section>
      {/* 3번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 3 : 별 거꾸로 출력</p>
        <input type='text'
               value={n}
               onChange={(e) => setN(e.target.value)}
               placeholder='자연수를 입력하세요'
               className='border'/>
        <button onClick={handleCreateStar}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          그리기
        </button>
        {/* 별 그려질 영역 */}
        <div>
          {stars.map((star,index) => (
            <p key={index}>{star}</p>
          ))}
        </div>
      </section>
      {/* 4번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 4 : 문자열에 따옴표 붙이기</p>
        <input type='text'
               value={str}
               onChange={(e) => setStr(e.target.value)}
               placeholder='문자열을 입력하세요'
               className='border'/>
        <button onClick={handleChangeStr}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          문자열 변환
        </button>
        <p className='font-bold'>결과: {createdStr}</p>
      </section>
      {/* 5번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 5 : 절대값 구하기</p>
        <input type='text'
               value={num}
               onChange={(e) => setNum(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='border'/>
        <button onClick={handleAbsoluteValue}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          절대값
        </button>
        <p className='font-bold'>결과: {absoluteNum}</p>
      </section>
      {/* 6번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 6 : 같으면 합, 다르면 차</p>
        <input type='text'
               value={n1}
               onChange={(e) => setN1(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='border'/>
        <input type='text'
               value={n2}
               onChange={(e) => setN2(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='ml-2 border'/>
         <button onClick={handleCompareNum}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          비교하기
        </button>
        <p className='font-bold'>결과: {numResult}</p>
      </section>
      {/* 7번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 7 : n까지 출력</p>
        <input type='text'
               value={number}
               onChange={(e) => setNumber(e.target.value)}
               placeholder='자연수를 입력하세요'
               className='border'/>
        <button onClick={handlePrintInt}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          출력
        </button>
        {/* 정수 출력 영역 */}
        <div>
          { printInt.map((int, index) => (
            <p key={index}>{int}</p>
          ))}
        </div>
      </section>
      {/* 8번 문제 */}
      <section className='m-4 p-4 bg-white rounded-2xl'>
        <p className='text-xl font-bold'>문제 8 : 인접한 숫자의 차</p>
        <input type='text'
               value={arrLeng}
               onChange={(e) => setArrLeng(e.target.value)}
               placeholder='배열의 길이를 입력하세요'
               className='border'/>
        <button onClick={handleCreateArr}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          배열 등록
        </button>
        <input type='text'
               value={arrVal}
               onChange={(e) => setArrVal(e.target.value)}
               placeholder='숫자를 입력하세요'
               className='ml-2 border'/>
        <button onClick={handleArrSub}
                className='ml-4 px-4 py-2 bg-amber-100 rounded cursor-pointer'>
          입력
        </button>
        <p className='font-bold'> 결과: {JSON.stringify(subArrResult)}</p>
      </section>
    </main>
  )
}
