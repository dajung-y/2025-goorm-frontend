import InputFile from "@/components/InputFile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [imgUrl, setImgUrl] =  useState(null);

  const presignedUrl = process.env.NEXT_PUBLIC_PRESIGNED_URL || '';
  if(presignedUrl == ''){
    alert('url이 없습니다');
  }
  // S3에 넣어둔 이미지 가져오기
  useEffect(()=>{
    const fetchImg = async () => {

      try{
        // get 요청 시 axios 내부에서 기본 파싱을 text 또는 json 형식으로 줌
        // 이미지,동영상,pdf 같은 이진파일을 그대로 가져오면 데이터 깨짐
        // 대용량 객체인 바이너리 타입으로 응답 받아야 함 => blob 
        const res = await axios.get(presignedUrl,{
          responseType: 'blob'
        });
        // 대용량 데이터인 blob 타입이 문자열 객체로 변환
        const objectUrl = URL.createObjectURL(res.data);
        setImgUrl(objectUrl);
      } catch(err){
        console.error('이미지로드 실패: ',err);
      }
    }
    fetchImg();
  },[])

  return(
    <div>
      <h3 className="text-2xl text-rose-400">S3 이미지 보기</h3>
      { 
        imgUrl ? (<img src={imgUrl}
                       alt="image" />) 
                : (<p>이미지 불러오는 중...</p>)
      }
      <h3 className="text-2xl text-blue-200">데이터 S3로 보내기</h3>
      <InputFile />
    </div>
  )
}
  