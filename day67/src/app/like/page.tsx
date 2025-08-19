'use client'

import Button from '@/components/Button';
import React, { useState } from 'react'

export default function page() {
  const [likes, setLikes] = useState<number>(0);
  const handleLike = () => {
    setLikes((prev) => prev+1);
  }
  return (
    <div className='p-8 my-8 mx-auto w-lg border-2 border-red-500 rounded-2xl '>
      <section className='flex justify-center gap-4'>
        <Button text={"좋아요"}
                onClick={handleLike}
                color='red' />
        <p>{likes}</p>
      </section>
    </div>
  )
}
