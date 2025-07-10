import React, { useState } from 'react'
import { usePostStore } from '../app/postStore';

export default function PostInput() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = usePostStore((state) => state.createPost);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !body) return;

    createPost(title,body);
    setTitle('');
    setBody('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>📝 새 글 작성</h2>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="내용"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">게시하기</button>
      </form>
    </div>
  )
}
