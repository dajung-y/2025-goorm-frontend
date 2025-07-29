import React from 'react'
import { useCreatePostMutation } from './postsApi'

export default function PostCreate() {
  // RTK Query
  // - 2개의 값을 배열로 반환
  // - [triggerFunction, resultObject] = use..Mutation();
  //    첫번째 매개변수: 실제 요청을 보내는 함수
  //    두번째 매개변수: 요청 상태(loading, error)
  const [createPost,{isSuccess, isLoading, isError}] = useCreatePostMutation();
  // 추가될 때까지 기다리기
  const handleCreate = async () => {
    await createPost({
      title: '새 게시글',
      body: '내용',
      userId: 1,
    });
    alert('게시글 생성 완료');
  }
  return (
    <div>
      <h3>게시글 생성</h3>
      <button onClick={handleCreate}>게시글 올리기</button>
    </div>
  )
}
