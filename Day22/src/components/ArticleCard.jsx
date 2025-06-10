import React from 'react'

export default function ArticleCard({profile,time,title,content,likes,comments}) {
  return (
    // 전체 아티클 랩
    <div className='max-w-3xl mx-auto p-4 border'>
      {/* 글+이미지 */}
      <div className='flex p-2 gap-2 border'>
        {/* 글 */}
        <div className='basis-3/4 p-2 border'>
          {/* 프로필 */}
          <div className='flex mb-2 border'>
            <img src='' alt='프로필이미지' className='w-10 h-10 rounded-full border' />
            <div className='profile__header'>
              <p className='text-md'>{profile}</p>
              <p className='text-sm text-gray-500'>{time}</p>
            </div>
          </div>
          <div className='content'>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
        {/* 썸네일 */}
        <div className='basis-1/4 p-2 border'>
          <img src='' alt='썸네일' id='thumbnail' />
        </div>
      </div>
      <div className='article__meta'>
        <span>공감 {likes}</span>
        <span>댓글 {comments}</span>
      </div>
    </div>
  )
}
