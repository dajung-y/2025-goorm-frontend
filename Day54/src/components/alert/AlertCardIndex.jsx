import React from 'react'
import AlertCard from './AlertCard'

export default function AlertCardIndex() {
  return (
    <div>
      <AlertCard>기본</AlertCard>
      <AlertCard type='success'>성공</AlertCard>
      <AlertCard type='warning'>경고</AlertCard>
      <AlertCard type='error'>오류</AlertCard>
    </div>
  )
}
