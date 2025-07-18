import { useQuery } from '@tanstack/react-query'
import React from 'react'

function fetchUser(){
  return fetch(`https://jsonplaceholder.typicode.com/users/1`)
         .then(res => {
          if(!res.ok) throw new Error('API 요청 실패');
          return res.json();
        });
}
const MINUTE = 1000*60;
export default function ReactQueryTest3() {
  const {data: userName, isLoading, isError, isFetching, staleTime} = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: MINUTE*3,
    refetchOnWindowFocus: true, // 포커스 얻었을 때 데이터 가져올지 여부
    select: (data) => data.name,
    // onSuccess(), onError 에러 트래킹으로 많이 사용
  });
  return (
    <div>
      {userName && <p>{userName}</p>}
    </div>
  )
}

/**
 staleTime
 기본 값 0 -> 데이터는 fetch이후 즉시 stale(오래된)상태 됨
 탭 포커스 변경시, 네트워크 다시 연결시, 컴포넌트 다시 마운트시 데이터 자동 재요청 가능

 실시간 데이터 필요(알림)
 변경이 적은 데이터(마이페이지)
 뉴스 피드처럼 일정 시간마다 갱신
 */