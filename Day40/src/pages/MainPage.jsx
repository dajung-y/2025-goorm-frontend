import React from 'react'
import Test2 from '../cospro/Test2'
import Test3 from '../cospro/Test3'

export default function MainPage() {
  return (
    <div className='flex flex-col gap-8 items-center mt-8'>
      <Test2 />
      <Test3 />
    </div>
  )
}
