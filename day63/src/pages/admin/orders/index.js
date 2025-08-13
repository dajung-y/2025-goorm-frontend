// 주문목록 조회 페이지

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function OrderAdminPage(){

  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const statusOptions = ["배송 준비", "배송 중", "배송 완료"];

  // 배송상태 변경되면 처리되는 이벤트 함수
  const handleStatusChange = async(id, newStatus) => {
    console.log(`id: ${id}, newStatus: ${newStatus}`);
    const { data } = await axios.patch("/api/admin/orders",{id, status: newStatus});
    console.log(data);
    alert(`${data.message} : ${data.order.id} - ${data.order.status}`);
    await axiosOrders(); // 변경된 목록조회
  }

  // 주문 목록 조회
  const axiosOrders = async () => {
    try{
      const res = await axios.get("/api/admin/orders");
      console.log(res.data);
      setOrders(res.data);
    } catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    axiosOrders();
  },[]);

  return (
    <div className="p-8">
      <Link href="/admin" className="text-sm text-blue-600 underline">
        돌아가기
      </Link>
      <h2 className="text-xl font-bold mb-4">주문 목록</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">주문 ID</th>
            <th className="p-2 border">고객명</th>
            <th className="p-2 border">상품</th>
            <th className="p-2 border">수량</th>
            <th className="p-2 border">상태</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.user}</td>
              <td className="p-2 border">{order.product}</td>
              <td className="p-2 border">{order.quantity}</td>
              <td className="p-2 border">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}