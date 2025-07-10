import React from 'react'
import { usePostStore } from '../app/postStore'

export default function PostList() {

  const posts = usePostStore((state) => state.posts);

  const deletePost = usePostStore((state) => state.deletePost);
  return (
    <div>
      <h2>📄 게시글 목록</h2>
      {posts.length === 0 ? (
        <p>작성된 게시글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button onClick={() => deletePost(post.id)}>삭제</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
