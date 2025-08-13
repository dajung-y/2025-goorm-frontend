// 상품 관리 페이지
// /admin/products

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminProductsPage(){

  const router = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect 내에서는 await 사용불가
  useEffect(() => {
    // 화면이 켜질 때 서버에 데이터 요청
    // 화면이 변할때(데이터에 변경있을 때) 요청
    // 즉시 실행 함수
    (async () => {
      try{
        const {data} = await axios.get("/api/admin/products");
        setProducts(data);
      } catch(err){
        console.error("상품을 불러오지 못했습니다");
      }
    })()
  },[router]);

  return (
    <div>
       <Link href="/admin" className="text-sm text-blue-600 underline">
        돌아가기
      </Link>
      <h2 className="text-xl font-bold mb-4">상품 목록</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">상품이미지</th>
            <th className="p-2 border">상품명</th>
            <th className="p-2 border">가격</th>
            <th className="p-2 border">재고</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">
                <Image
                  className="w-full h-full"
                  src={p.image}
                  alt={p.name}
                  width={100}
                  height={100}
                />
              </td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.price}</td>
              <td className="p-2 border">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
  
/**
 즉시실행함수
 - 함수를 만듦과 동시에 바로 사용하는 문법
 await은 useEffect 안에서, 혹은 함수 바깥에서 사용불가
 따라서 익명 비동기 함수 (이름이 없는 함수를 만들어서 딱 한번만 실행)
 (() => {
    // 동작할 로직
  })()
  마지막 ()는 함수 바로 실행하라는 함수 호출 의미
 */