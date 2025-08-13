// 상품 관련 API

import products from "@/data/products"

export default function handler(req,res){
  if(req.method === "GET"){
    return res.status(200).json(products);
  }
  return res.status(405).end();
}