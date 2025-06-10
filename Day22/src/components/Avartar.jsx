import React from 'react'

export default function Avartar({img, isNew}) {
  return (
    <div className='avartar'>
      <img className='photo'
            src={img}
            alt='avatar' />
      {isNew && <span className='new'>New</span>}
    </div>
  )
}
