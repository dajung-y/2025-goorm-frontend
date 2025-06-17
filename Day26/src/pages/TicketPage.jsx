import React from 'react'
import { useParams } from 'react-router-dom'

export default function TicketPage() {
  const {movieCd} = useParams();
  
  return (
    <div>
      예매할 영화 : {movieCd}
    </div>
  )
}
