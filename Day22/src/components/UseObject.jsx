import React, { useState } from 'react'

export default function UseObject() {

  // 사용자 정보 저장 및 갱신
  const [user,setUser] = useState({
    name: '',
    job: ''
  });

  return (
    <div>
      {/* onChange 이벤트
          리액트에서 입력값이 바뀔 때마다 실행되는 이벤트 핸들러
          
          기존에 있던 내용 유지하고 ...연산자 사용해서 복사한 뒤 사용
          복사하는 이유?
          리액트는 부분 업데이트 불가
          객체 전체를 변경해야되기 때문에 기존 내용 복사하고 필요한 것만 유지
          
          */}
      <input placeholder='이름'
             value={user.name}
             onChange={(e) => setUser({...user, name: e.target.value})} />
      <p>{user.name}</p>
    </div>
  )
}
