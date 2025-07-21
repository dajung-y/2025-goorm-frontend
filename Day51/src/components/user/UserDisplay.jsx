import React from 'react'
import { uesUserStore } from '../../stores/userStore'

export default function UserDisplay() {
  const name = uesUserStore((state) => state.name);
  return (
      <p>입력된 이름: {name}</p>
  )
}
