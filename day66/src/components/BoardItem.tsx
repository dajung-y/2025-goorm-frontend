import React from 'react'
import { Board } from './TotalExample'

export default function BoardItem({board}: {board: Board}) {
  return (
    <div className='m-2 p-2 border rounded'>
      <h3 className='text-2xl font-bold'>{board.title}</h3>
      <p>{board.content}</p>
      <p>{board.readConunt}</p>
    </div>
  )
}
