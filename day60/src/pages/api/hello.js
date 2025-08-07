// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {

  // 요청받은 전송 방식이 POST인 경우
  if(req.method === 'POST'){
    const {title, price} = req.body;
    console.log('상품명: ',title);
    console.log('가격: ',price);

    const client = await clientPromise;
    // insertOne
    // 몽고db에 collection에 하나의 document 추가할 때 사용하는 함수
    // insertMany([여러개의 값들을 객체 형식으로 보내기])
    const db = client.db('my_shop');
    const products = await db.collection('products')
                     .insertOne({
                      title: title,
                      price: price,
                      // imageUrl: '/cheers.jpg'
                     });

    // 데이터(이미지, 동영상)를 몽고db에 넣을 수 있지만 대체적으로 사용하지 않음 (클라우드 사용)
    // 백업 무거움, 저장소 용량 작음, 이진파일로 변경해야함
    // readFileSync(이미지 경로)
    
    
    // res.status(200).json({
    //   message: '처리 완료',
    //   data: req.body
    // });
    // 페이지 이동하고싶을 때 요청
    // return 붙이는 이유?
    return res.redirect(302,'/');
  } else{
    return res.status(405).json('허용되지 않는 요청 방식입니다');
  }





  // res.status(200).json({ name: "John Doe" });
  // try{
  //   const client = await clientPromise;
  //   const db = client.db('my_shop');
  //   // 몽고db는 db 없으면 저장공간을 만듦
  //   // 첫번째 데이터가 추가될 때 몽고db 웹 사이트에서 확인 가능
  //   const products = db.collection('products')
  //                     .find()
  //                     .toArray();
  //   res.status(200).json(products);
  // }catch(err){
  //   res.status(500).json('에러 발생');
  // }
}

/**
 서버에 url 요청을 받으면 handler 함수가 기본적으로 자동 실행
 export dafault 기본적으로 해당파일이 API 요청을 받으면 먼저 실행되서 처리하는 함수

 개발용 로컬 환경에서만 사용하는 것
 .env.local
 공통변수
 .env

 NEXT_PUBLIC 
 - 브라우저에서 접근 가능하게 노출됨
 - 누구나 개발자 도구에서 확인 가능
 - 비밀번호, 사용자 이름, 클러스터 주소 등 포함된 DB URL들은 반드시 감춰야함

 기본적으로 API 공통주소들은 브라우저에서 써야할 값이므로 붙임
 */