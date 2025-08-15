// api/vote
// 투표 결과 가져오는 함수

export default function handler(req,res){
  if(req.method !== "GET"){
    return res.status(405).json({
      message: '허용하지 않는 메서드'
    })
  }
  try{
    const result1 = Math.floor(Math.random() * 50) + 50; // 50~99
    const result2 = Math.floor(Math.random() * 50) + 50; // 50~99

    const voteResult = [
      {
        id: 1,
        result: result1
      },
      {
        id: 2,
        result: result2
      }
  ];

    console.log("투표 결과 생성");
    return res.status(200).json(voteResult)
  } catch(err){
    console.error("투표 결과 생성 에러 : ",err);
    return res.status(500).json({
      message: "서버 에러 발생",
    })
  }
}
