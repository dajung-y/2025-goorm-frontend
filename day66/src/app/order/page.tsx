import OrderItem from '@/components/OrderItem';
import React from 'react'

export type Order = {
  id: number;
  product: string;
  amount: number;
  price: number;
  state: string;
}
export default function page() {

  const ord1 : Order = {
    id: 102345678,
    product: "샤오미 미밴드 7",
    amount: 1,
    price: 59000,
    state: "배송 완료"
  }

  const ord2 : Order = {
    id: 102345677,
    product: "USB 충전 케이블 1m",
    amount: 2,
    price: 5000,
    state: "배송 중"
  }

  const ord3 : Order = {
    id: 102345676,
    product: "블루투스 이어폰",
    amount: 1,
    price: 89000,
    state: "결제 완료"
  }

  const ord4 : Order = {
    id: 102345675,
    product: "무선 마우스",
    amount: 1,
    price: 15900,
    state: "취소 완료"
  }

  const orders = [ord1,ord2,ord3,ord4];

  return (
    <div>
      <h1 className='text-2xl font-bold'>주문내역</h1>
      <table className="w-lg">
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-2'>주문번호</th>
            <th className='p-2'>상품명</th>
            <th className='p-2'>수량</th>
            <th className='p-2'>가격</th>
            <th className='p-2'>배송상태</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => (
              <OrderItem key={order.id}
                        order={order} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
