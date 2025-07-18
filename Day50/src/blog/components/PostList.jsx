import React from 'react'
import usePosts from '../hooks/usePosts'
import { Link } from 'react-router-dom';

export default function PostList() {
  const {data, isLoading, isError} = usePosts();

  if(isLoading) return <p>로딩중...</p>
  if(isError) return<p>데이터 불러오기 실패</p>

  return (
    <section className='w-full bg-amber-50'>
      <div className='max-w-[1280px] mx-auto px-4 py-8'>
        <div className="grid grid-cols-4 gap-8">
          {data.map((post) => (
            <Link to={`/post/${post.id}`}
                  key={post.id}
                  className='p-4 bg-white rounded-2xl cursor-pointer'>
              <div className='flex flex-col justify-between min-h-36'>
                <div>
                  <h3 className=' text-lg font-bold'>{post.title}</h3>
                </div>
                <div>
                  <p className='text-gray-400'>{post.userId}</p>
                  <p>{post.body.length> 20
                      ? post.body.slice(0,20)+'...'
                      : post.body }</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
