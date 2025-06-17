import React, { useEffect, useState } from 'react'
import MovieComponent from '../components/MovieComponent';
import '../css/Movie.css'
import axios from 'axios';

export default function MoviePage() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_URL;
  const apiUrl = `${baseUrl}?key=${apiKey}&targetDt=20250607`;

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    async function boxOffice() {
      try{
        const res = await axios.get(apiUrl);
        console.log(res.data)
        setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
      } catch(err) {
        console.error(`error: ${err}`);
      }
    }
    boxOffice();
  },[])

  // useEffect(() => {
  //   async function boxOffice(){
  //     // 요청 보내고 기다림
  //     try {
  //     const response = await fetch(apiUrl);
  //     // 정상적으로 왔는지 에러 발생했는지
  //     if(!response.ok) return;

  //     const data = await response.json();
  //     console.log(data);
  //     setMovieList(data.boxOfficeResult.dailyBoxOfficeList);
  //   } catch(err) {
  //     console.error(`error: ${err}`);
  //    }
  //   }
  //   boxOffice();
  // },[])


  return (
    <div>
      <h1>무비차트</h1>
      <hr />
      <MovieComponent movieList={movieList}/>
    </div>
  )
}
