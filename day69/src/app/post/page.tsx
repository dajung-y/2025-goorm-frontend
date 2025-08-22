import React from 'react'
import { PostSummary } from '@/types/post'
import Link from 'next/link'

export default function page() {

  const posts : PostSummary[] = [
    {
      id: 1,
      title: "첫번째 게시글"
    },
    {
      id:2,
      title: "두번째 게시글"
    },
    {
      id:3,
      title: "세번째 게시글"
    }
  ]
  return (
    <div className='p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4'>게시글 목록</h1>
        <button className='px-2 py-1 bg-blue-600 rounded text-white'>
          <Link href='/post/create'>
            글 작성하기
          </Link>
        </button>
      </div>
      <div className='mt-4 space-y-2'>
        {posts.map(post => (
          <div key={post.id} className='bg-white p-4 shadow'>
            <h2 className='text-lg font-semibold'>
              {post.id}. {post.title}
            </h2>
          </div>
        ))}
    </div>
  </div>
  )
}
