import React from 'react'
import { useProductContext } from './ProductProvider'

// list-item
function Item({label, value}) {
  return(
    <div className='flex py-4 border-b border-gray-200'>
      <span className='w-32 text-gray-400'>{label}</span>
      <span className='text-black'>{value}</span>
    </div>
  )
}

// button
function FirstPurchaseBtn () {
  const handleBtnClick = () => {
    alert('할인쿠폰이 발급되었습니다!')
  }
  return(
    <button className='p-4 my-4 text-start bg-purple-50 rounded cursor-pointer'
            onClick={handleBtnClick}>
      첫 구매라면 <span className='text-purple-800 font-semibold'>10,000원</span> 즉시 할인
    </button>
  )

}

export default function ProductDetail() {

  // 데이터 가져오기
  const {product} = useProductContext();
  return (
    <main className="flex justify-center w-full max-w-[1280px] mx-auto p-12 gap-8 border">
      {/* 이미지 */}
      <div className='w-2/5'>
        <img src={product.image} 
             alt={product.productName}
             className='rounded' />
      </div>
      {/* 상세설명 */}
      {/* main */}
      <div className='flex flex-col w-3/5'>
        <div className='flex flex-col mt-2'>
          <p className='text-gray-400'><b>{product.ship}</b>| {product.brand} {'>'} </p>  
          <p className='py-2 font-semibold text-3xl'>[{product.brand}] {product.productName}</p>
          <p className='text-gray-300'>{product.description}</p>
          <p className='py-2 font-bold'>
            <span className='text-4xl font-bold text-orange-500'>{product.discountRate}% </span>
            <b className='text-4xl font-bold'>{(product.price *(100 - product.discountRate)/100).toLocaleString()}</b>원~
          </p>
          <p className='text-gray-400 text-lg line-through'>{product.price.toLocaleString()}원</p>
          <p className='text-3xl'>원산지: 상품설명/상세정보 참조</p>
          {/* button */}
          <FirstPurchaseBtn />
          
        </div> 
        {/* sub */}
        <div className='border-t border-gray-200'>
          <Item label='배송' value={product.ship} />
          <Item label='판매자' value={product.seller} />
          <Item label='포장타입' value={product.packageType} />
          <Item label='판매단위' value={product.unit} />
          <Item label='중량/용량' value={product.weight} />
          <Item label='알레르기정보' value={product.allergy} />
          <Item label='안내사항' value={product.announce} />
        </div>
        
      </div>

    </main>
  )
}
