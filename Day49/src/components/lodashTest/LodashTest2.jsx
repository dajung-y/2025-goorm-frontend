import { debounce } from 'lodash';
import React, { useState } from 'react'

export default function LodashTest2() {
  const [result, setResult] = useState('');
  const search = debounce((text) => {
    // 로직 작성
    setResult(`${text}로 검색 결과를 찾았어요`);
  },500);
  return (
    <div>
      <h3>검색창 자동완성</h3>
      {/* 검색창 자동완성(글자를 멈춰야 검색됨) */}
      <input onChange={e => search(e.target.value)}
             placeholder='검색어 입력'
             className='border rounded' />
      <p>{result}</p>
    </div>
  )
}
