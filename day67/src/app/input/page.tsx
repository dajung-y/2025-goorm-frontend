'use client'
import React, { useState } from 'react'

export default function page() {
  const [input, setInput] = useState<string>("");
  return (
    <div className='p-8 my-8 mx-auto w-lg border-2 border-blue-500 rounded-2xl '>
      <section>
        <input value={input}
               placeholder='문자 입력'
               onChange={(e) => setInput(e.target.value)}
               className='border-2 mb-2 border-blue-500 rounded' />
        <p>{input}</p>
      </section>
    </div>
  )
}
