import React from 'react'

export default function CreateForm() {
  return (
    <div className='p-4 w-sm border border-blue-400 rounded-2xl'>
      <form action="api/hello" 
            method="POST"
            className='flex flex-col space-y-2'>
        <input type='text'
               placeholder='상품명을 입력하세요'
               className='p-2 border-b'
              //  name 필드가 있어야 어떤 데이터인지 서버에서 분간 가능함
               name='title' /> 
        <input type='number'
               placeholder='가격을 입력하세요'
               className='p-2 border-b'
               name='price' />
        <button type='submit'
                className='mt-4 py-2 bg-blue-500 text-white font-semibold rounded '>상품 추가</button>
      </form>
    </div>
  )
}
