import { useEffect, useState } from "react";
import defaultImg from '../../public/no-image.png';
export default function MoviesPage(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  },[]);
  
  const fetchMovies = async () => {
    try{
      setLoading(true);
      setError(null);
      const response = await fetch('/api/movies');
      const result = await response.json();

      if(result.success){
        setMovies(result.data);
      } else{
        setError(result.message);
      }
    } catch(err){
      setError('영화 데이터를 불러오는데 실패했습니다');
      console.error(err);
    } finally{
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">영화 데이터 불러오는 중...</h1>
      </div>
    )
  }
  
  if(error){
    return(
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">에러 발생</h1>
        <p>{error}</p>
      </div>
    )
  }
  
  return(
    <main className="min-h-screen p-8">
      <h1 className="mb-4 text-center text-2xl font-bold">영화 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          movies.map((movie) => (
            <div key={movie._id}
                 className="flex flex-col items-center p-4 border border-gray-300 rounded-2xl">
              <img src={movie.poster}
                    alt={movie._id}
                    className="w-40 h-60 mb-4"
                    onError={e => e.target.src ='/no-image.png'}
                  />
              <h4 className="font-semibold">{movie.title}</h4>
            </div>
          ))
        }
      </div>
    </main>
  )
};

