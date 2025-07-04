import React, { useEffect, useState } from 'react'

export default function Febo() {
  // 몇번 계산할지 지정하는 숫자
  const [n, setN] = useState(0);
  const [dp, setDp] = useState([]);

  useEffect(() => {
    // n+1 크기의 배열을 만들어서 0으로 채움
    const arr = Array(n+1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for(let i =2; i<=n; i++){
      arr[i] = arr[i-1] + arr[i-2];
    }
    setDp(arr);
  },[n])
  return (
    <div>

    </div>
  )
}
