import { TodoPreview } from '@/types/todo'
import React from 'react'

type Props = {
  item: TodoPreview
}

export default function TodoPreviewCard({item} : Props) {
  return (
    <div>
      <p>{item.title}</p>
    </div>
  )
}
