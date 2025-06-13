import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

export default function Post() {
  // 게시글 가져오기
  // useEffect 가져와서
  // useState에 저장
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 처음 실행시 게시글 가져옴
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
                    setPosts(data.slice(0,10)) 
                    console.log(data.slice(0,10))
                  })
  },[]);

  return (
    <div>
      <h1>전체 게시판</h1>
      <ul className='post__list'>
        {
          posts.map(post =>(
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
