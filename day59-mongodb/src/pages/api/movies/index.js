import clientPromise from "@/lib/mongodb"

export default async function handler(req, res) {
  if(req.method !== "GET"){
    return res.status(405).json({
      success: false,
      message: 'GET 요청만 실행'
    })
  }
  try{
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const movies = await db.collection('movies')
                           .find({
                              poster: {$exists: true} // poster 필드 존재하는 문서 찾기
                            })
                           .limit(10)
                           .toArray();
    console.log('가져온 영화 목록: ',movies);
    return res.status(200).json({
      success: true,
      message: '영화 목록 조회 성공',
      data: movies
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'movies 가져오기 실패'
    })
  }
}