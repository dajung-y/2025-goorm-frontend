import React from 'react'
import usePosts from '../hooks/usePosts'
import { useNavigate, useParams } from 'react-router-dom';

export default function PostDetail() {
  const {id} = useParams();
  const postId = Number(id);
  const navigate = useNavigate();
  const {data:posts, isLoading, isError} = usePosts();

  if(isLoading) return <p>로딩중...</p>
  if(isError) return<p>데이터 불러오기 실패</p>

  const post = posts.find((post) => post.id === postId)
  if(!post) return <p>해당 글을 찾을 수 없습니다</p>


  return (
    <main className='w-full min-h-screen bg-amber-50'>
      <div className='max-w-[1280px] mx-auto px-4 py-8'>
        <div className='pb-4'>
          <button onClick={() => navigate(-1)}
                  className='font-bold cursor-pointer'>
            ⬅️ 뒤로가기
          </button>
        </div>
        <section className='flex flex-col space-y-1 p-8 bg-white rounded-2xl'>
          <h3 className='text-2xl font-bold'>{post.title}</h3>
          <p className='text-gray-500'>작성자 : {post.userId}</p>
          <p>{post.body}</p>
        </section>
      </div>
    </main>
  )
}
