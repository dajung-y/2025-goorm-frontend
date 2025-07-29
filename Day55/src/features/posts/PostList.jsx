import React from 'react'
import { useGetPostsQuery } from './postsApi'
import styles from './PostList.module.scss';

export default function PostList() {
  const id = 1;
  // isLoading, isError
  // RTK Query가 자동으로 제공하는 상태값
  // useGetPostsQuery() 훅 만들면 자동으로 생김
  const {
    data: posts,
    isLoading,
    isError
  } = useGetPostsQuery(id);

  if(isLoading) return <p>로딩 중...</p>
  if(isError) return <p>에러 발생</p>
  console.log(useGetPostsQuery);
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>📋게시글</h3>
      <ul>
        {posts.map(post => (
          <li key={post.userId}>
            <h4 className={styles.title}>
              <span className={styles.badge}>제목</span>
              {post.title}
            </h4>
            <hr />
            <p className={styles.body}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
