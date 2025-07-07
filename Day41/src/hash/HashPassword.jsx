import React, { useState } from 'react'

export default function HashPassword() {

  const [password, setPassword] = useState('');
  const [hashTable, setHashTable] = useState('');
  const passwordChange = () => {
    const key = password;
    let hash =0;
    const tableSize = 10; // 고정된 테이블 크기

    console.log(`key : ${key}`);
    // 해시 값 계산
    for(let i=0;i<key.length;i++){
      hash = hash + key.charCodeAt(i);
    }
    console.log(`hashing value : ${hash}`);
    // 인덱스 계산 (해시값을 테이블 크기로 나눈 나머지)
    const index = hash%tableSize;

    // 새로운 해시 테이블 생성
    const newHashTable = [...hashTable];
    console.log(`새로운 해시 테이블: ${newHashTable}`);
    // 해당 인덱스에 비밀번호 저장
    newHashTable[index] = key;

    // 상태 업데이트
    setHashTable(newHashTable);

    console.log(`해시 값 : ${hash}, 인덱스 : ${index}, 저장된 값 : ${key}`);
    

  }
  return (
    <div>HashPassword
      <input type='text'
             placeholder='비밀번호 입력'
             value={password}
             onChange={e => setPassword(e.target.value)}/>
      <button onClick={passwordChange}>
        암호화
      </button>
      {
        hashTable && (
          <div>
            <strong>결과</strong>{hashTable}
          </div>
        )
      }
    </div>
  )
}

/**
 브라우저 내장 Web Crypto API 활용
 bcrypt, js-sha256 외부라이브러리
 */