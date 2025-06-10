import React from 'react'
import Avartar from './Avartar'


export default function Profile({img, name, title, isNew}) {
  return (
    <div className='profile'>
      <Avartar img={img} isNew={isNew}/>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}
