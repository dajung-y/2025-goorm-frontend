import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

/**
 번들
 - 모듈 통합
 - 네트워크 요청 최소화(파일이 너무 많으면 HTTP요청이 늘어나 페이지 로드가 느려짐)
 - 호환성, 구형 브라우저에서 동작하도록 트랜스파일해서 묶어줌
 - 최적화로 초기 로딩 속도와 실행 성능을 높임
 */

export const useBoardStore = create(
  devtools(
    immer((set) => ({
      posts: [],
      currentId: 1,
      addPost: (title,content) => 
              set((state) => {state.posts.push({
                id: state.currentId++,
                title,
                content,
              })}),
      deletePost: (id) =>
        set((state) => {
          posts = state.posts.filter((post) => post.id !==id);
        }),
      updatate: (id,title,content) =>
        set((state) => {
          const post = state.posts.find((post) => post.id === id);
          if(post){
            post.title = title;
            post.content = content;
          }
        })
    }))
  ),
  {name : 'board-store'}
)