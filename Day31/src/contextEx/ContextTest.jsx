import React from 'react'
import Parent from './Parent'

export default function ContextTest({user}) {
  return (
    <div>ContextTest
      <Parent user={user} />
    </div>
  )
}
