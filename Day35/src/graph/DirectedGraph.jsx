import React from 'react'

export default function DirectedGraph() {
  const list = [
    [0,1,0,1],
    [0,0,1,1],
    [0,0,0,1],
    [0,0,0,0],
  ];
  const nodes = ['A', 'B', 'C', 'D'];
  return (
    <div className='m-4'>
      <h1 className='text-2xl font-bold'>방향 그래프</h1>
      {/* 표 */}
      <table>
        {/* 헤더 */}
        <thead>
          <tr>
            { nodes.map((node,i) => (
              <td key={i}
                  className='w-4'>
                {node}
              </td>
            ))}
          </tr>
        </thead>
        {/* 내용 */}
        <tbody>
          
        </tbody>
      </table>

    </div>
  )
}
