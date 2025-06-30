import React, { useEffect, useState } from 'react'

export default function YoutubeSearch() {
  const APIKEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=몽자&key=${APIKEY}`;

  const [list,setList] = useState([]);

  // 유튜브 호출
  useEffect(() => {
    fetch(requestUrl)
          .then((res) => res.json())
          .then((data) =>{
            setList(data.items);
             console.log('실제 데이터',data);
             console.log('items배열', data.items);
          })
          .catch((err) => console.log(err));
  },[])
  return (
    <div className='m-4'>
      <h1 className='text-2xl text-red-500 font-bold'>유튜브</h1>
      {
        list.map((item) => (
          <div key={item.id.videoId || item.etag}
               className='mb-2 p-4 w-100 border rounded'>
            <div>
              <img src={item.snippet.thumbnails.default.url} 
                   alt={item.snippet.title} />
            </div>
            <p className='font-bold'>{item.snippet.title}</p>
            <p className='text-sm text-gray-400'>{item.snippet.channelTitle}</p>
          </div>
        ))
      }
    </div>
  )
}

/**
 유튜브 동영상 API 사용
 1. 구글 클라우드 플랫폼 로그인

 */