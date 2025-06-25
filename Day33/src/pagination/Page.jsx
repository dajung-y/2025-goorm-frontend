import React, { useEffect, useState } from 'react'

export default function Page() {
  const clientId = import.meta.env.VITE_CLINET_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const keyword = '투바투연준';

  // 임시 우회
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const requestUrl = 'https://openapi.naver.com/v1/search/image'

  // 데이터 저장
  const [images, setImages] = useState([]);

  // 1. 보여질 데이터 개수 지정
  let itemCount = 10;
  // 2. 총 페이지 지정, 총 페이지 = 총 아이템의 개수/ itemCount
  const totalPage = images.length/itemCount;

  // 3. 시작하는 페이지 번호
  let startPage = 1;

  // 4. 현재 페이지 번호
  let currentPage = 1;

  // 5. 페이지마다 시작하는 아이템의 인덱스 번호

  // 비동기 통신 시작

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `${proxy}${requestUrl}?query=${keyword}&display=50`,
        {
          headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret' : clientSecret,
          }
        }
      );
      // 데이터 다 받아올때까지 기다리기
      const data = await res.json();

      console.log(data.items);
      // 변수에 저장
      setImages(data.items);
    }
    fetchImages();
  },[]);


  return (
    <div className='m-4 p-4'>
      <h1 className='mb-2 text-2xl font-bold'>pagination</h1>
      <input type='text'
              placeholder='검색어를 입력하세요'
              className='p-1 border rounded' />
      <button className='ml-2 p-2 bg-amber-400 rounded'>검색</button>

      <ul>
        {
          images.map((img,i) => (
            <li key={i}
                className='w-30 h-30'>
              <img src={img.thumbnail}
                   alt={img.title}
                   className='w-full h-full object-cover' />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

/**
 Pagination
 - 한 번에 너무 많은 데이터를 한 화면에 보여주면 사용자 경험이 떨어지고
   네트워크, 렌더링 성능에 부담이 되므로 데이터를 여러 페이지로 나눠서 제공하는 것
  
 - 현재 페이지, 총 페이지 수, 이전/다음 버튼, 페이지 번호 등 제공해서
   사용자가 원하는 위치로 빠르게 이동할 수 있도록 함
 */