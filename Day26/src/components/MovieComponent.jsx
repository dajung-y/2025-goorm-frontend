import React from 'react'
import MovieCard from './MovieCard'

export default function MovieComponent({movieList}) {
  return (
    <main className='movie__container'>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.movieCd}
          movieCd={movie.movieCd}
          rank={movie.rank}
          movieNm={movie.movieNm}
          salesShare={movie.salesShare}
          openDt={movie.openDt}
           />
      ))}
    </main>
  )
}
