import React from 'react'
import { useCartStore } from '../app/stores/cartStore'

export default function ProductCard({item}) {

  const {addItem} = useCartStore();
  const handleAddCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price
    })
  }

  return (
    <article className='flex flex-col space-y-4 items-center w-60 border rounded-2xl p-4'>
      {/* 상품 정보 */}
      <div className='text-center'>
        <h3 className='text-lg font-bold'>{item.name}</h3>
        <p>{item.price.toLocaleString()}원</p>
      </div>
      {/* 담기 */}
      <div className='w-full'>
        <button onClick={handleAddCart}
                className='w-full bg-gray-300 text-white font-bold rounded cursor-pointer'>담기</button>
      </div>
    </article>
  )
}
