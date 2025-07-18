import { useQuery } from '@tanstack/react-query';
import React from 'react'
function fetchUser(){
  return fetch(`https://jsonplaceholder.typicode.com/users/1`)
         .then(res => {
          if(!res.ok) throw new Error('API 요청 실패');
          return res.json();
        });
}
export default function ReactQueryTest2() {
  const {data,isFetching,isError,refetch} = useQuery({
    queryKey: ['user'],     // 고유 ID
    queryFn : fetchUser,    // 실제 데이터 가져오는 함수명

    // 선택 옵션
    enabled: false          // 처음에는 자동 실행되지 않음
  });

  return (
    <div>
      <h3>사용자 정보 수동으로 불러오기</h3>
      <button onClick={() => refetch()}>
        { isFetching? '불러오는 중' : '불러오기'}
      </button>
      {isError &&<p>에러 발생</p>}
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          </div>
      )}
    </div>
  )
}

/**
 실행순서
 1. 컴포넌트가 마운트되어도 API요청은 자동으로 실행되지 않음
 2. 버튼을 클릭하면 refetch()가 실행됨
 3. fetchUser() 함수가 호출되어 데이터 가져옴
 4. 로딩중일 땐 알림
 5. 데이터 도착하면 화면에 띄움
 */