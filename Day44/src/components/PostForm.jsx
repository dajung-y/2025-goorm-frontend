import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postSlice';

export default function PostForm() {

  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !body) return;

    dispatch(createPost({title,body}));

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
