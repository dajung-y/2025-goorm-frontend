'use client'
import LabelInput from '@/components/LabelInput';
import useInput from '@/hooks/useInput'
import React, { useState } from 'react'

export default function page() {
  const title = useInput("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(title.value.trim() === "" && content.trim() === ""){
      alert("제목과 내용을 모두 입력하세요");
      return;
    }

  }
  return (
    <div className='p-8'>
      <div>
        <h1 className='text-center text-2xl font-bold'>글 작성</h1>
        <form onSubmit={handleSubmit}>
          <LabelInput
            label='제목'
            value={title.value}
            placeholder='제목을 입력하세요'
            onChange={title.onChange}/>
          <label>내용</label>
          <textarea
            value={content}
            placeholder='내용을 입력하세요'
            onChange={e => setContent(e.target.value)}
            className='border rounded border-gray-400 w-full' />
          <div className='flex justify-center'>
            <button type='submit'
                    className='mt-4 bg-blue-600 rounded text-white p-2 items-center cursor-pointer'>
              글 작성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
