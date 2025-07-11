import React from 'react'
import { useCartStore } from '../app/stores/cartStore'

export default function CartInfo() {

  const {totalItems, totalPrice} = useCartStore();
  return (
    <section className='p-8'>
      <div className='flex flex-col items-center space-y-4 py-4 border'>
        <div>
          <h4 className='text-xl font-bold'>총 상품 <span>{totalItems}개</span></h4>
        </div>
        <div>
          <h5 className='text-lg font-semibold'>총 금액 <span>{totalPrice.toLocaleString()}원</span></h5>
        </div>
      </div>
    </section>
  )
}
