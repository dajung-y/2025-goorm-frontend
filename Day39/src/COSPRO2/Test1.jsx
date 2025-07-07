import React, { useState } from 'react'

export default function Test1() {

  const shirtSize = ["XS", "S", "M", "L", "XL", "XXL"];
  // input값 저장
  const [input, setInput] = useState('');
  const [orderdSize, setOrderdSize] = useState([]);
  const [sortedSize, setSortedSize] = useState(null);

  const countSize = (arr) => {
    const counts = {XS:0, S:0, M:0, L:0, XL:0, XXL:0};
    arr.forEach(size => {
      counts[size]++;
    });
    setSortedSize(["XS", "S", "M", "L", "XL", "XXL"].map(size =>counts[size]));
    console.log(sortedSize);
    return sortedSize;
  }


  // 입력된 값 배열로 저장
  const handleInput = () => {
    const arr = input.split(' ');
    console.log(arr);
    setOrderdSize(arr);
    countSize(orderdSize);
  }
  return (
    <div className='p-4'>
      <p className='pb-2 text-lg '>사이즈를 입력하세요 (대문자로 입력, 공백으로 구분)</p>
      <p className='pb-2'>사이즈 가이드 ["XS", "S", "M", "L", "XL", "XXL"]</p>
      <input type='text'
             value={input}
             onChange={e => setInput(e.target.value)}
             placeholder='예) M S XL'
             className='border rounded' />
      <button onClick={handleInput}
              className='ml-2 px-2 border rounded cursor-pointer'>
        입력
      </button>
      <p>
        
      </p>
    </div>
  )
}
