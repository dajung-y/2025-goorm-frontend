import React from 'react'
import Likes from '../reducer/Likes'
import Timer from '../reducer/Timer'
import EntranceList from '../reducer/EntranceList'

export default function MissionPage() {
  return (
    <div className='m-4'>
      <Likes />
      <Timer />
      <EntranceList />
    </div>
  )
}
