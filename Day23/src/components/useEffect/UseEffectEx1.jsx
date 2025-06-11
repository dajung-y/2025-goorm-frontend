import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseEffectEx1() {

  // useState - 값을 유지하고 화면 다시 렌더링
  const [username, setUsername] = useState('사과');

  // useEffect - 값 바뀔때마다 실행할건지, 처음 한 번만 실행할건지

  // 컴포넌트가 나타날 때 실행(mount)
  // 배열에 값이 없으면 처음 실행될 때 한 번만 실행
  useEffect(()=>{
    console.log('처음 실행될 때 생성');
  },[]);

  // 컴포넌트의 값이 바뀔 때마다 실행(update)
  useEffect(()=>{
    console.log(`값 변경된 후 username : ${username}`);
  },[username]);
  

  const handleBtnClick = () => {
    setUsername('복숭아');
    console.log(`버튼 클릭후 현재 username: ${username}`);
  }
  return (
    <div>
      <h1>{username}</h1>
      <Button onClick={handleBtnClick}
              style={{backgroundColor: 'lightpink',
                      border: 'none',
                      }}>이름변경
      </Button>
    </div>
  )
}

// Lifecycle
// - 컴포넌트를 언제 생성 (mount)
// - 컴포넌트 언제 재렌더링 (update)
// - 컴포넌트 언제 삭제 (unmount)

// 컴포넌트 ---- 실행할코드 ---- mount
// 한 번에 볼 수있는 useEffect
// 실행하면 mount & update 한번에 실행
// 콜백함수를 이용해서 내용 정리
// - 컴포넌트가 화면에 렌더링된 후 특정 작업을 실행하도록 도와주는 훅
// - 리액트 외부의 일
//   ex) api, data 가져올 때
// - 태그가 바뀔 때, 나타날 때