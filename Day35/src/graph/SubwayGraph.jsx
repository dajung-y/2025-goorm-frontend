import React, { useState } from 'react'

export default function SubwayGraph() {
  const stations = ['합정', '홍대', '신촌', '이대', '아현'];
  const subway = [
    [0,1,0,0,1],
    [1,0,1,1,1],
    [0,1,0,1,0],
    [0,1,1,0,1],
    [1,1,0,1,0]
  ];

  // 입력받은 역 연결된 인정행렬 기억
  const [connected, setConnected] = useState([]);
  // 역 입력 값 기억
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    // 예외처리 - 역 존재하지 않을 경우
    // indexOf(값) 배열안에서 값이 있으면 공간의 번호 줌
    //             배열안에서 값 없으면 -1 돌려줌
    // input 변수 값에 공백이 있으면? trim()사용
    // trim() 앞과 뒤 공백 모두 제거

    // 공백 제거한 input값을 stations의 배열의 값과 확인하여 index 가져옴
    const index = stations.indexOf(input.trim());
    if(index===-1){
      alert('존재하지 않는 역입니다');
      setConnected([]);
      return;
    }

    // 역이 존재하는 경우
    const connections = subway[index].map((val,i) => (
                                        val === 1 ? stations[i] : null
                                      ))
                                      .filter(Boolean);
                                      // filter(item => Boolean(item))
                                      // null, false, 0, '', undefind 가 들어오면 값 제거
                                      // 정상적인 문자들만 남김 

    setConnected(connections);
  }
  return (
    <div>
      <h1>지하철 노선도</h1>
      <div>
        <input type='text'
               onChange={(e) => setInput(e.target.value)}
               placeholder='역을 입력하세요'
               className='border rounded' />
        <button onClick={handleSearch}
                className='ml-2 px-2 py-0.5 bg-amber-200 rounded cursor-pointer'>찾기</button>
      </div>
      <ul>
        { stations.map((station,i) => (
          <li key={i}>
            <strong>{station}</strong> ➡️ 연결된 역: {' '}
            {
              subway[i].map((isConnected, j) => (
                isConnected ? stations[j] : null
              ))
              .filter(name => name !==null)
              .join(', ')
            }
          </li>
        ))}
      </ul>
      {
        connected.length> 0 && (
          <div>
            <h3>{input}역과 연결된 역 : {connected.join(', ')}</h3>
          </div>
        )
      }

    </div>
  )
}
