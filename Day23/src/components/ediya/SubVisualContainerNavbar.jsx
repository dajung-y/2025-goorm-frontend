import React, { useState } from 'react'

export default function SubVisualContainerNavbar({menu}) {

  
  return (
    <div className='subVisual__lnb__container'>
      <ul className='lnb'>
        <li>{menu[0].category}</li>
        <li id='selected-menu'>{menu[1].category}</li>
        <li>{menu[2].category}</li>
      </ul>

    </div>
  )
}
