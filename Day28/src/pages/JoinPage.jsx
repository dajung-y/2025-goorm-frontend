import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase'
import { ref, set } from 'firebase/database';

export default function JoinPage() {

  const [datas, setDatas] = useState({});

  const handleJoin = (e) => {
    const joinId = uuidv4(); 
    console.log(joinId);

    console.log('유저 정보', e.target);

    // 저장소 이름 JoinList
    // 1. firebase에서 db정보 가져오기
    // 2. set 함수 이용해서 데이터 쓰기, ref 함수 이용해서 정보 보내기
    set(ref(db,`JoinList/${joinId}`),)
       .then(() => alert('회원가입 성공'))
       .catch((err) => alert('회원가입 실패'));

  }
  return (
    <div>
      <input type='text' placeholder='아이디 입력' className='border m-4'/><br/>
      <input type='password' placeholder='비밀번호 입력' className='border m-4'/><br/>
      <input type='email' placeholder='이메일 입력' className='border m-4'/><br/>

      <button onClick={handleJoin}
              className='px-4 py-2 m-4 bg-blue-500 text-white rounded-md'>회원가입
      </button>

    </div>
  )
}
