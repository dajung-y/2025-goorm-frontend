// mongodb 연결
const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI;

// uri 없는 경우
if(!URI){
  throw new Error('URI를 찾을 수 없습니다');
}

// MongoClient : MongoDB에 연결하기 위한 클래스
// 새 객체 생성해서 uri 연결
const client = new MongoClient(URI);
// client.connect() : 실제로 MongoDB 서버에 연결 시도
// 반환값 : Promise 객체 (연결 완료를 약속하는 객체)
const clientPromise = client.connect();

export default clientPromise;