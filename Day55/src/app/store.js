import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../features/posts/postsApi";
import { commentsApi } from "../features/comments/CommentsApi";

// configureStore() 리덕스 툴킷에서 제공하는 함수
// createStore보다 간단하게 설정 가능
// reducer, middleware등의 설정을 포함
// reducerPath는 API 사용할 고유 키
// concat
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(postsApi.middleware)
                                        .concat(commentsApi.middleware),
});
/*
Uncaught Error: `reducer` is a required argument, 
and must be a function or an object of functions 
that can be passed to combineReducers

store에서 reducer 설정 빠져있음
*/
