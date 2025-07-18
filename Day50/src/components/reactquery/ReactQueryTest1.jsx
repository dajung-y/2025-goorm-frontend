import { useQuery } from '@tanstack/react-query';
import React from 'react'

function fetchUser(){
  return fetch(`https://jsonplaceholder.typicode.com/users/1`)
         .then(res => res.json());
}

export default function ReactQueryTest1() {

  // React-Query v5미만 - 배열과 함수 형태로 값 받음
  // const {data, isLoading, isError} = useQuery(['user'],fetchUser);

  // React-Query v5이상부터 객체 형식으로 사용
  const {data,isLoading,isError} = useQuery({
    queryKey: ['user'],     // 고유 ID
    queryFn : fetchUser,    // 실제 데이터 가져오는 함수명
  });

  if(isLoading) return <p>로딩중...</p>
  if(isError) return <p>에러 발생</p>
  return (
    <div>
      <p>user 정보</p>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </div>
  )
}

/**
 리액트 쿼리와 리액트 파일 연결하는 Provider 설정
 main
 */