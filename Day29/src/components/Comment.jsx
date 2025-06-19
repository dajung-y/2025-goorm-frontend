import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'

// loader에서 defer 사용
export async function commentLoader(){
  const commentsPromise = fetch(`https://jsonplaceholder.typicode.com/comments`)
                    .then(res=>res.json());
                    // react 7버전 나올 예정
                    // defer 사용하지 않아도 자동으로 실행될 수 있도록 
  return defer({
    comments: commentsPromise
  });
}

export default function Comment() {
  const {comments} = useLoaderData(); // 위해서 실행한 함수가 리턴하면 Promise객체로 반환
  console.log(comments);
  return (
    <div>
      <h2>댓글 리스트</h2>
      <Suspense fallback={<p>로딩중...</p>}> 
        <Await resolve={comments}>
          {
            loadedComments => (
              <ul>
                {
                  loadedComments.slice(0,10).map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                  ))
                }
              </ul>
            )
          }

        </Await>
      </Suspense>
    </div>
  )
}
