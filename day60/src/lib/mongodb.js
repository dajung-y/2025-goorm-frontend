const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if(!uri){
  throw new Error('uri 찾을 수 없음');
}
const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;

/**
 URL(주소) - 웹사이트나 파일이 어디 잇는지 알려주는 위치 정보
 URI(식별자) - 위치를 포함한 자원들을 가리키는 더 큰 개념
 */