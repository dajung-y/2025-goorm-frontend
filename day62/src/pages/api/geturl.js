// api/geturl.js
import AWS from 'aws-sdk';

// S3 객체 생성
const s3 = new AWS.S3({
  accessKeyId : process.env.AWS_ACCESS_KEY,
  secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
  region : process.env.AWS_REGION,
  signatureVersion : 'v4'
});

export default function handler(req,res){
  // console.log(req);
  const key = req.body; // 업로드한 이미지 가져오기
  console.log('key: ',key);
  // 5분 url 발급 받기
  const url = s3.getSignedUrl("getObject",{
    Bucket : process.env.S3_BUCKET_NAME,
    Key: key,
    Expires: 60*5,
    ResponseContentDisposition: "inline",
  });
  res.status(200).json({url});
}