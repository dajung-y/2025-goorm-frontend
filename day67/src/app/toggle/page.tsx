'use client'

import React, { useState } from 'react'
import Button from '@/components/Button';

export default function page() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOn(prev => !prev);
  }
  return (
    <div className='p-8 my-8 mx-auto w-lg border-2 border-yellow-500 rounded-2xl'>
      <section>
        <Button text={"switch"} 
                onClick={handleToggle}
                color='yellow' />
        <div className={`${isOn ? 'bg-amber-200' : 'bg-gray-300'}`}>
          <p>{ isOn ? "ON" : "OFF" }</p>
        </div>
      </section>
    </div>
  )
}
