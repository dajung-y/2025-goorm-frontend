import React, { useState } from 'react'

export default function City() {

  const cities = ['서울', '부산', '대전', '광주', '대구'];
  const citiesMat=[
    [0,1,1,0,0],
    [1,0,0,1,1],
    [1,0,0,1,0],
    [0,1,1,0,1],
    [0,1,0,1,0]
  ];

  // 입력값 저장
  const [input, setInput] = useState('');
  // 연결된 도시 저장
  const [connected, setConnected] = useState([]);

  // 검색한 도시 결과
  const [searchedCity, setSearchedCity] = useState('');

  // 검색 결과
  const [showResult, setShowResult] = useState(false);


  // 입력값 찾는 함수
  const handleSearch = () => {
    console.log('입력값과 연결된 도시 찾는 함수');
    console.log('입력된 값: ',input);
    // 입력값이 있는지 확인
    const index = cities.indexOf(input.trim());

    // 입력값이 없는경우
    if(index===-1){
      alert('입력한 도시는 없는 도시입니다.');
    }

    // 연결된 도시 있는 경우
    const connections = citiesMat[index].map((value,index) => (
                                          value ===1 ? cities[index] : null
                                        ))
                                        .filter(Boolean);
    setConnected(connections); 
    setSearchedCity(input);   
    setShowResult(true);                              

    setInput('');
  }


  return (
    <div className='m-4 p-2 border-4 border-sky-200 rounded'>
      <input type='text'
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className='border rounded p-2'
             placeholder='도시를 입력하세요' />
      <button onClick={handleSearch}
              className='ml-2 p-2 bg-blue-800 text-white rounded'>
        검색
      </button>
      <div>
        <p className='mt-2'
           hidden={!showResult}>
          ✅ {searchedCity}에서 연결된 도시: 
          { connected.map((city, index) => (
            <span key={index}
                  className='ml-2'>
              {city}{index < connected.length-1 ? ',' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
