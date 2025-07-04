import React, { useEffect, useState } from 'react'

export default function Lcs() {
  const [strA, setStrA] = useState('react');
  const [strB, setStrB] = useState('reactnative');

  const [lcsLength, setLcsLength] = useState(0);
  const [dpTable, setDTable] = useState([]);

  // 계산하는 함수
  // Array.from()
  // - 배열을 만들 때 사용
  // from(길이, 콜백함수)

  // fill()
  // - 괄호 안에 똑같은 값 배열에 채움
  const calculateLcs = (a,b) => {
    const dp = Array.from({length: a.length+1},
                           () => Array(b.length).fill(0)
    );
    for(let i=1; i<=a.length; i++){
      for(let j=1; j<=b.length; j++){
        if(a[i-1] === b[j-1]){
          dp[i][j] = dp[i-1][j-1] +1;
        } else {
          dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
        }
      }
      setLcsLength(dp[a.length][b.length]);
      setDTable(dp);
    }       
  }

  useEffect(() => {
    calculateLcs(strA,strB);
  },[strA,strB])

  return (
    <div>
      <h3>자동완성 추천을 위한 최적 문자열</h3>
      <div style={{ marginBottom: 10 }}>
        <label>
          문자열 A:
          <input value={strA} onChange={(e) => setStrA(e.target.value)} />
        </label>
        <label style={{ marginLeft: 20 }}>
          문자열 B:
          <input value={strB} onChange={(e) => setStrB(e.target.value)} />
        </label>
      </div>

      <p>🔍 가장 긴 공통 부분 수열의 길이: <strong>{lcsLength}</strong></p>

      <h4>🧾 DP 테이블 시각화</h4>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            {strB.split('').map((char, j) => (
              <th key={j}>{char}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dpTable.map((row, i) => (
            <tr key={i}>
              <th>{i === 0 ? "" : strA[i - 1]}</th>
              {row.map((val, j) => (
                <td key={j} style={{ backgroundColor: val > 0 ? '#e0f7fa' : '#f0f0f0' }}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
