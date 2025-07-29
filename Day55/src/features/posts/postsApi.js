import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK Query 기본 구조 흐름
// 1. API 서비스 파일 생성
// 2. 컴포넌트 안에서 자동 생성된 훅을 사용해서 데이터 가져옴
// createApi() 서버한테 요청을 쉽게 관리할 수 있도록함
// fetchBaseQuery() 기본적인 서버 요청(fetch)을 설정할 수 있는 함수
// - fetch기반으로 만든 기본 Http클라이언트로 axios가 없도 간단한 통신가능
export const postsApi = createApi({
  reducerPath: 'postsApi',      // store에 등록할 때 사용하는 이름
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),                         // 서버랑 통신할 때 사용할 기본 설정(fetch)
  endpoints: (builder) => ({
    getPosts: builder.query({
      // query: () => '/posts'
      // query: (userId) => `posts?userId=${userId}`
      query: (id) => `posts?id=${id}` // id로 가져오기
    }),
    // query() 실제 요청에 필요한 정보를 반환하는 함수
    // newPost는 사용자가 게시글 추가할 때

    createPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost
      })
    })
  })  // api요청들 정의
      // builder RTK Query에서 제공하는 도우미 객체
      // query()    get요청
      // metation() post/put/delete 요청
      // getPosts:  사용자가 정한 endpoint이름
});

export const {useGetPostsQuery, useCreatePostMutation} = postsApi

/**
 useGetPostsQuery is not a function

 @reduxjs/toolkit/query 에서 가져오면 훅 생성을 지원하지 않음

 React 전용 entry-point인
 @reduxjs/toolkit/query/react 를 써야 훅이 자동으로 만들어짐

 */