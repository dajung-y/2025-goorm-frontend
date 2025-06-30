import React from 'react'

export default function Graph() {


  const adList = [
    [0,1,0,1],
    [1,0,1,1],
    [0,1,0,1],
    [1,1,1,0]
  ];

  const nodeNames = ['A', 'B', 'C', 'D'];

  // 무방향 그래프를 인접행렬로 구현할 때 정점들을 배열의 인덱스로 표현
  // 간선은 배열 내의 값으로 두 정점이 연결되어있다면 1, 아니면 0으로 표현
  return (
    <div className='m-4'>
      <h1 className='text-2xl font-bold'>무방향 그래프</h1>
      <table>
        <thead className='border-b border-b-blue-500'>
          <tr>
            { nodeNames.map((la,i) => (
              <th key={i}
                  className=' w-4'>
                {la}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { adList.map((row,i) => (
            <tr key={i}>
              <th className='w-4 border-r border-r-blue-500'>
                {nodeNames[i]}
              </th>
              { row.map((val,i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
