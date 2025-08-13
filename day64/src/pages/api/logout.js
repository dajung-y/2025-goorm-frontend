// 쿠키 삭제

import { deleteCookie } from "cookies-next";

export default function handler(req, res){
  deleteCookie("adminToken",{req,res,path: "/"});
  return res.status(200).json({
    success: true,
    message: "쿠키 삭제 성공"
  })
}