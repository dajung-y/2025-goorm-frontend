// api는 api라우트 설정을 담는 객체
// bodyParser - api라우트의 body 파서 기능을 on/off 하는 스위치
import AWS from 'aws-sdk';
import fs from 'fs';
import formidable from "formidable";

export const config = {
  api: {
    bodyParser : false,
  }
}

// S3 객체 생성
const s3 = new AWS.S3({
  accessKeyId : process.env.AWS_ACCESS_KEY,
  secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
  region : process.env.AWS_REGION,
  signatureVersion : 'v4'
});

export default function handler(req, res) {
  if(req.method !== "POST"){
    return res.status(405).json({
      error: "허용되지 않는 메서드"
    });
  }
  console.log('서버연결');
  const form = formidable({multiples: false});

  // parse()
  // 요청을 읽고 파싱(데이터 분리)시작
  // err - 파싱중 오류
  // fields - form 태그에서 문자열 데이터
  // files - 파일 데이터
  // 변수 필요없는 경우 _ 사용 (ex. err,_,files)
  form.parse(req, async(err,fields,files) => {
    // console.log('파일: ',files);
    // 업로드 된 파일 객체
    // 배열이면 true, 아니면 false 반환
    // formData.append("필드명") isArray(files."필드명") 같아야함
    // const f = Array.isArray(files.file) ? files.file[0] :
    //                                       files.file;
    const f = files.file[0];
    console.log('파일 객체: ',f);
    console.log('파일 경로: ',f.filepath);
    const key = `${Date.now()}-${f.originalFilename || 'file'}`;

    // 실제 s3 업로드 하는 설정
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      Body: fs.createReadStream(f.filepath),
      ContentType: f.mimetype
    }
    const result = await s3.upload(params).promise();
    console.log("결과:", result);
    res.status(200).json({
      message: '파일 업로드 성공',
      key
    })
  });
}
