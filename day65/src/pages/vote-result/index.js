// pages/vote-result/index.js
// 투표 결과 보여주는 페이지

import axios from "axios";

// 컴포넌트
export default function VoteResult({voteData,error}){
  if(error){
    return(
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center">⚠️에러 발생⚠️</h1>
      </div>
    )
  }
  const max = Math.max(...voteData.map((data) => data.result));
  console.log(max);
  const election = voteData.find((data) => data.result === max);
  console.log(election);
  
  return(
    <main className="p-8 w-full min-h-screen">
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-4xl font-bold">🗳️투표 결과</h1>
        {
          voteData.map((data) => (
            <p key={data.id}
              className="text-2xl">
              {data.id}번. {data.result}표
            </p>
          ))
        }
        <p className="text-2xl">🎉 축하합니다 🎉</p>
        <h3 className="text-3xl font-bold">{election.id}번 당선</h3>
      </div>
    </main>
  )
}

// 정적데이터 가져오는 함수
export async function getStaticProps(){
  try{ 
    const baseURL = process.env.NEXT_BASE_URL;
    console.log("API 호출 URL : ",`${baseURL}/api/vote`);

    const res = await axios.get(`${baseURL}/api/vote`);
    console.log("API 응답 : ",res.data);

    return{
      props: {
        voteData: res.data,
        error: null
      }
    }
  } catch(err){
    console.error("데이터 불러오기 실패: ",err);
    return{
      props: {
        voteData: null,
        error: `${err.message}`
      }
    }
  }
}

