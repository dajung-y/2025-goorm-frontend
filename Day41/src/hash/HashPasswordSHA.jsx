import React, { useState } from 'react'

export default function HashPasswordSHA() {
// 입력된 비밀번호 저장하는 상태
const [password, setPassword] = useState('');
// 암호화된 결과를 저장하는 상태
const [hashTable, setHashTable] = useState('');
//  SHA-256 해시를 만들어주는 함수


async function toSHA256(text){
  // textEncoder 객체 : 문자열을 byte배열로 변경해주는 것
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  console.log(`data : ${data}`);
  // crypto.subtle.digest('SHA-256',data) 실제 비밀코드로 변환
  // Promise 객체로 반환
  // 최대 256비트 길이(16진수 문자열로 64글자)
  const hashBuffer = await crypto.subtle.digest('SHA-256',data);
  console.log(`hashBuffer 실행 : ${hashBuffer}`);

  // 데이터를 하나하나 볼 수 있는 배열로 바꿈
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // 숫자 하나 하나를 16진수 문자로 바꾸고 붙여서 문자열 완성
  const hashHex = hashArray.map((byte) =>
    byte.toString(16)
    .padStart(2,'0'))
    .join('');

  return hashHex;
}

// 버튼 클릭시 실행함수
const passwordChange = async () => {
  const result = await toSHA256(password);
  setHashTable(result);
}
  return (
    <div>
      <input type='text'
             placeholder='비밀번호'
             onChange={(e) => setPassword(e.target.value)}/>

      <button onClick={passwordChange}>암호화</button>

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
