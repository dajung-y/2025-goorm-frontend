// src/pages/api/products/index.js

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {

  try{
    const client = await clientPromise;
    const db = client.db('my_shop');
    const productsCollection = db.collection('products');
  
    // POST 요청
    if(req.method === "POST"){
      const {title,price} = req.body;
      
      if(!title || ! price){
        return res.status(400).json({
          message: '이름과 가격은 필수입니다'
        })
      }
  
      // 데이터 하나만 저장
      await productsCollection.insertOne({
        title, 
        price
      });
      // 홈 화면으로 리다이렉트
      return res.redirect(302,'/');
    }

    // GET 요청
    if(req.method === 'GET'){
      const products = await productsCollection.find()
                                               .toArray();
      return res.status(200).json({
        success: true,
        message: 'products 데이터 요청 성공',
        data: products
      })                                   
    }
    console.log('상품 데이터:', products);

    return res.status(405).json({
      success: false,
      message: '허용되지 않는 메서드입니다'
    })

  } catch(error){
    console.log("API 에러 : ",error);
    return res.status(500).json({
      message: '서버 에러가 발생했습니다'
    })
  }
}