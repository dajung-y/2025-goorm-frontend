import React from 'react'
import PostList from './features/posts/PostList'
import CommentList from './features/comments/CommentList'
import PostCreate from './features/posts/PostCreate'
import CommentCreate from './features/comments/CommentCreate'

export default function App() {
  return (
    <div>
      {/* <PostCreate /> */}
      <PostList />
      <CommentList />
      <CommentCreate />
    </div>
  )
}


/**
 RTK Query
 Redux Toolkit에 포함된 API 서버와 통신을 위한 강력한 도구
 REST API 또는 GraphQL 서버와 통신할 때 데이터를 가져오고 상태를 관리하는 작업 자동으로 처리
 왜 사용?
 - 데이터 가져오기 위해 axios로 요청
 - 응답 데이터를 저장할 useState
 - API 요청 시기를 결정하는 useEffect
 - 로딩 중 상태, 에러 상태 직접 구현
 - 전역상태 Redux까지 구현
 위 반복 코드가 많아 유지보수 힘듦
 => RTK Query이용해서 자동화해줌

 서버와 통신할 때 fetch, Axios, RTK Query
 작은 프로젝트 Axios + useState, useEffect
 규모가 있는 프로젝트 RTK Query(Redux 연동으로 글로벌 상태 + 서버 상태 통합)
 */