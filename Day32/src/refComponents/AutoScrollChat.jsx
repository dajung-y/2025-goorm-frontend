import React, { useEffect, useRef, useState } from 'react'

export default function AutoScrollChat() {

  // 채팅창에 채팅을 입력하면 자동으로 스크롤이 이동하도록 코드 작성
  // 버튼을 클릭했을 때 스크롤이 자동으로 이동하는 코드
  // 1. ref 변수 선언
  const endRef = useRef(null);

  // 2. 채팅 메시지 관리 위해서 useState
  const [msg, setMsg] = useState(['안녕하세요', '환영합니다']);

  // 새로운 메시지 index
  const [newMsgIndex, setNewMsgIndex] = useState(1);

  // 6. 메시지가 추가될 때마다 (업데이트) 자동으로 채팅창 아래로 스크롤 내려갈 수 있도록
  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: 'smooth'});

  },[msg]);


  // 4. 이벤트 추가
  const handleAddMsg =() => {
    // prev 변수에는 기존의 배열 값 들어옴
    // 따라서 새로운 배열을 만들 때 기존 배열 복사한 뒤 새로운 메시지 가장 뒤에 추가함 -> 큐
    setMsg((prev) => [...prev,`새로운 메시지 ${prev.length +1}`]);
    setNewMsgIndex(msg.length);
  }
  return (
    <div className='p-4'> 
      <h1 className='mb-2 text-2xl font-bold'>
        AutoScrollChat
      </h1>
      {/* 채팅창 */}
      <div className='h-50 border-2 overflow-y-auto'>
        {/* 5. 메시지 출력하는 map */}
        {msg.map((m,index) => (
          <div key={index} 
               className={`p-2 ${index === newMsgIndex ? 'bg-emerald-100 rounded' : ''}`}>
            {m}
          </div>
        ))}
         {/* 3. 스크롤의 위치를 지정. 맨 아래 참조하는 태그 만들어서 ref 변수랑 연결 */}
        <div ref={endRef}></div>
      </div>
      <button onClick={handleAddMsg}
              className='px-4 py-2 mt-4 bg-emerald-600 rounded text-white cursor-pointer'>
        메시지 추가
      </button>
    </div>
  )
}
