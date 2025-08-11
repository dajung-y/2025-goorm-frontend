import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!file) return alert('파일을 선택하세요');

    // multipart/form-data 알아서 자동으로 변환
    // 데이터를 꺼내 쓰거나 파일을 전송받을 경우에는 FormData 객체를 만들어서 받음
    const formData = new FormData();

    formData.append("file",file);
    
    const res = await axios.post("/api/hello",formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    alert(res.data.message);

    const {key} = res.data;
    console.log('발급된 key: ', key);
    // presigned Get URL 발급
    const data = await axios.post("/api/geturl",{key: key});
    setImgUrl(data.url);

  }
  return (
    <div>
      {/* 파일 서버로 보내기 */}
      <h2 className="text-2xl text-blue-500">파일 업로드</h2>
      <form onSubmit={handleSubmit}>
        <input type="file"
               onChange={e => setFile(e.target.files[0])}
               className="border rounded m-2"
               accept="image/*"

        />
        <button type="sumbit"
                className="px-2 bg-blue-500 rounded text-white">
          업로드
        </button>
      </form>
      {imgUrl && (
        <div>
          <img src={imgUrl}
               alt="업로드"
                width={200}/> 
          <p>이 URL은 5분 뒤 만료됩니다</p>
        </div>
      )}
    </div>
  );
}

// 여러개의 파일을 선택하면 선택한 파일들의 리스트 (FileList객체)
// [0] 첫번째 단일 파일만 선택
// http에서 쓰는 multipart/form-data 전송방식
// 텍스트와 파일을 한번에 여러 조각으로 나눠서 보내는 형식

// 사용하는 이유
// 일반적으로 application/json 순수 데이터만 전송 가능
// 이미지, 동영상, PDF 같은 파일은 그대로 전송 불가능 (이진파일)
// 파일은 텍스트와 다른 형태로 HTTP 요청에 담아야함
// multipart/form-data 전송방식으로 온 데이터를 꺼내오기 위한 라이브러리
// npm install formidable

