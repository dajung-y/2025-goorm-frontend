import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetailPage() {
  const {movieCd} = useParams();
  return (
    <div>
      현재 영화의 movieCd : {movieCd}
    </div>
  )
}
