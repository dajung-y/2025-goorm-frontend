import clientPromise from "@/lib/mongodb";

export default async function handler(req, res){
  // id 추출
  const {id} = req.query;
  console.log('받아온 ID : ',id);

  // 일단은 GET 요청만 허용
  if(req.method !== "GET"){
    return res.status(405).json({
      success: false,
      message: "GET 요청만 허용"
    });
  }
  console.log("GET 요청 확인됨, ID : ", id);

  // ID가 MongoDB ObjectId 형식인지 검사
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: '유효하지 않은 상품 ID입니다'
    });
  }
  console.log("ID 유효성 검사 통과 : ",id);

  try{
    const client = await clientPromise;
    const db = client.db('my_shop');
  }catch(error){

  }
}