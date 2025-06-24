import React, { useEffect, useRef } from 'react'

export default function FocusInput() {

  // DOM 참조할 변수를 만듦
  const inputRef = useRef(null);

  // 페이지 로드시 바로 focus
  // 한번만 실행
  // Optional Chaining
  // 왼쪽에 있는 데이터가 null 이거나 undefined일 때 즉시 값을 반환하고
  // 그렇지 않으면 ?.뒤에 있는 내용을 실행함
  useEffect(()=>{
    console.log(`현재 DOM 요소 ${inputRef.current}`);
    if(inputRef.current){
      inputRef.current?.focus();
    }
  },[])

  // const handleFocus = () => {
  //   // 버튼 클릭시
  //   console.log(inputRef);
  //   if(inputRef.current){
  //     inputRef.current.focus();
  //   }
  // }

  return (
    <div className='p-4'>
      <h1 className='mb-2 text-2xl font-bold'>FocusIput</h1>

      <input ref={inputRef}
             type='text' 
             placeholder='클릭없이 자동으로 포커스'
             className='p-2 border border-purple-400 rounded'
             />

      {/* <button onClick={handleFocus}
              className='px-4 py-2 ml-4 bg-purple-300 rounded text-white cursor-pointer'>
        포거스로 이동
      </button> */}
    </div>
  )
}
