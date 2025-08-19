'use client'
import Button from '@/components/Button';
import React, { useState } from 'react'

export default function page() {
  const [count, setCount] = useState<number>(0);
  const handleInc = () => {
    setCount((prev) => prev+1);
  }
  const handleDec = () => {
    setCount((prev) => prev-1);
  }
  return (
    <div className='p-8 my-8 mx-auto w-lg border-2 border-green-500 rounded-2xl '>
      <section className='text-2xl text-center pb-4'>
        <h3>카운트 값 : {count}</h3>
      </section>
      <section className='flex justify-center gap-4'>
        <Button text={"증가"} onClick={handleInc} />
        <Button text={"감소"} onClick={handleDec} />
      </section>
    </div>
  )
}
