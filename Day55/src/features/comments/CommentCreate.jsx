import React from 'react'
import { useCreateCommentMutation } from './CommentsApi'
import styles from './CommentCreate.module.scss';
export default function CommentCreate() {
  const [createComment] = useCreateCommentMutation();
  const handleCreateComment = async () => {
    await createComment({
      postId: 1,
      name: '이름',
      email: 'example@domain.com',
      body: '댓글',
    })
    alert('댓글이 작성되었습니다');
  }
  return (
    <div className='container'>
      <h3 className={styles.text}>댓글 작성</h3>
      <button onClick={handleCreateComment}
              className={styles.button}>댓글 작성하기</button>
    </div>
  )
}
