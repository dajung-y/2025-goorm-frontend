import React from 'react'
import NewBadge from './NewBadge'

export default function Card({profile, isNew}) {
  return (
    <>
      <div className='w-[200px] h-[200px] p-4 m-8 text-center bg-gray-100 rounded-md shadow-md'>
        <div className='relative'>
        <img src={profile.imgUrl} 
             alt='프로필 이미지'
             className='w-[100px] h-[100px] mx-auto rounded-full'
            />
            {isNew && <NewBadge />}
        </div>
        <h3 className='text-xl font-bold mt-2'>{profile.name}</h3>
        <p className='text-sm mt-2'>{profile.role}</p>
      </div>
    </>
  )
}
