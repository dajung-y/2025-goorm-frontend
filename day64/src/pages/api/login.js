// 쿠키 설정

import { setCookie } from "cookies-next";

export default function handler(req, res){
  const token = "demo-token";
  setCookie("adminToken",token,{req,res,path:'/'}); // 기본설정

  return res.status(200).json({
    ok: true
  })
}