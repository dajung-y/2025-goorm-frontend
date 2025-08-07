import React from 'react'

export default function ProductCard({id, imgUrl, title, price}) {
  return (
    <article key={id}
              className='flex flex-col py-2 bg-white rounded-2xl items-center shadow-md overflow-hidden'>
      <div className='overflow-hidden mb-2'>
        <img src={imgUrl}
              alt={title}
              className='overflow-hidden'/>
      </div>
      <h4 className='text-lg font-bold'>{title}</h4>
      <p>₩{Number(price).toLocaleString()}</p>
    </article>
  )
}
