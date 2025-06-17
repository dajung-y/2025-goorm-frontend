import React from 'react'

export default function MovieCard({rank, movieNm, salesShare, openDt}) {

  const movieImg =[
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89315/89315_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89671/89671_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89629/89629_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89697/89697_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89628/89628_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89664/89664_320.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89674/89674_320.jpg',
    'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22632_503_1.jpg',
    'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89711/89711_320.jpg',
    'https://img.megabox.co.kr/SharedImg/2025/04/09/xmqJjPNQnP6h7v7P1dRdD5Yxyt1Q4551_420.jpg'
  ]

  const imgIndex = rank-1;
  return (
    <article>
      {/* 영화 순위 */}
      <div className='movie__card__num'>
        <span>No.{rank}</span>
      </div>
      {/* 영화 */}
      <div className='movie__card__img'>
        <img src={movieImg[imgIndex]} alt='영화이미지' />
      </div>
      <div className='movie__card__info'>
        <p className='info--title'>{movieNm}</p>
        <p className='info--rate'>예매율 <span>{salesShare}%</span></p>
        <p className='info--date'><span>{openDt}</span> 개봉</p>
      </div>
      <div className='movie__card__purchase'>
        <button className='purchase__btn'>예매하기</button>
      </div>
      
    </article>
  )
}
