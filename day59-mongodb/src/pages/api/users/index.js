import clientPromise from "@/lib/mongodb";

export default async function handler(req, res){
  // 405 ERROR : 허용되지 않는 메서드
  if(req.method !== 'GET'){
    return res.status(405).json({
      success: false,
      message: 'GET 요청만 실행'
    })
  }
  try{
    const client = await clientPromise;   // db 연결 대기
    const db = client.db('sample_mflix'); // db 선택
    const users = await db.collection('users')  // collection 선택
                          .find()
                          .limit(10)
                          .toArray();
    console.log('가져온 사용자 목록 :', users);
    return res.status(200).json({
      success: true,
      message: '사용자 목록 조회 성공',
      data: users
    })
  }catch(error){
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'users 가져오기 실패'
    })
  }
}