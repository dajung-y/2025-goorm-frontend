import { Order } from '@/app/order/page'
import React from 'react'

export default function OrderItem({order} : {order : Order}) {
  return (
    <tr className='text-center'>
      <td className='p-1'>{order.id}</td>
      <td>{order.product}</td>
      <td>{order.amount}</td>
      <td>{order.price.toLocaleString()}원</td>
      <td>{order.state}</td>
    </tr>
  )
}
