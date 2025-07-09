import React from 'react'

export async function fetchTodos() {
  console.log(`fetchTodos 실행됨`);
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  try{
    console.log(`API 통신 실행됨`);
    if(!response.ok){
      throw new Error('Fail to fetch todos');
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch(err){
    console.error(err.message);
  }
}

// Thunk
// - 나중에 실행 될 함수
// - 계산이나 작업 바로 실행하지 않고 함수로 감싸서 나중에 실행할 수 있도록 만들어 놓는 것
// - redux에서는 주로 비동기 작업 (API요청, 타이머, 파일읽기)


// createAsyncThunk
// API 호출 쉽게 처리하도록 도와주는 함수
// - 비동기 API요청을 redux에서 쉽게 처리
// 원래 redux는 순수 동기 작업만 처리
// 서버에서 API 요청 보내고 응답받을 때는 비동기 처리 필요
// - createAsyncThunk는 비동기 함수 작성할 수 있도록 해줌
// 자동으로 pending, fulfilled, rejected 상태 만들어줌