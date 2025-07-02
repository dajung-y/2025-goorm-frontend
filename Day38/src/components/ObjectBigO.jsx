import React, { useState } from 'react'

export default function ObjectBigO() {

  const [user,setUser] = useState({
    firstName : 'ann',
    isUser: true,
    pats: ['cat','dog'],
  });

  // 연산로그 상태
  const [logs, setLogs] = useState([]);

  const handleAll = () => {
    const output = [];

    // 접근 O(1)
    output.push(`user.firstName -> ${user.firstName}`);

    // 존재확인 O(1)
    // hasOwnProperty() - 기본 제공되는 메서드
    // 객체 자신이 특정 키를 직접 가지고 있는지 확인
    output.push(`firstName 존재? ${user.hasOwnProperty('firstName')}`);

    // O(1) - 추가, 삭제
    const newUser = {...user, age:20};
    output.push(`추가: age -> 20`);

    // O(n) = keys, values
    const key = Object.keys(newUser);
    const value = Object.values(newUser);
    const entry = Object.entries(newUser);

    output.push(`keys O(n): ${JSON.stringify(key)}`);
    output.push(`values O(n): ${JSON.stringify(value)}`);
    output.push(`entries O(n): ${JSON.stringify(entry)}`);

    setUser(newUser); // 최종 객체 업데이트
    console.log(user);
    setLogs(output);

    console.log('output: ',output);
  }
  return (
    <div>
      <h1>객체의 Big-O</h1>
      <button onClick={handleAll}>실행하기</button>

      <div>
        <h3>현재 객체:</h3>
        <p>{JSON.stringify(user,null,2)}</p>
      </div>

      <div>
        <h3>연산 로그:</h3>
        <ul>
          {logs.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
