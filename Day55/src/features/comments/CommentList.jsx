import React from 'react'
import { useGetCommentsQuery } from './CommentsApi'
import styles from './CommentList.module.scss';


export default function CommentList() {
  const postId = 1;
  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommentsQuery(postId);

  if(isLoading) return <p>로딩 중...</p>
  if(isError) return <p>에러 발생</p>
  return (
    <div className='container'>
      <h3 className={styles.text}>댓글 목록</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}
              className={styles.card}>
            <h4 className={styles.title}>{comment.name}</h4>
            <p className={styles.body}>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
