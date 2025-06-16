import React, { useEffect, useState } from 'react'
import MovieComponent from '../components/MovieComponent';
import '../css/Movie.css'
import MovieCard from '../components/MovieCard';

export default function MoviePage() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_URL;
  const apiUrl = `${baseUrl}?key=${apiKey}&targetDt=20250607`;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function boxOffice(){
      // 요청 보내고 기다림
      const response = await fetch(apiUrl);
      // 정상적으로 왔는지 에러 발생했는지
      if(!response.ok) return;

      const data = await response.json();
      console.log(data);
      setMovieList(data.boxOfficeResult.dailyBoxOfficeList);
    }
    boxOffice();
  },[])


  return (
    <div>
      <h1>무비차트</h1>
      <hr />
      <MovieComponent movieList={movieList}/>
      <MovieCard />
    </div>
  )
}
