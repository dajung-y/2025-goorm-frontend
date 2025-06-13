import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetailPage() {

  // 동적 파라미터
  const {id} = useParams();
  // product 데이터
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  const product = products[Number(id)];

  // products 다 안받아졌을 경우 product는 undefined
  // 렌더링 전에 조건부 처리
  if(!product) return <div>로딩중</div>

  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <section className='product__section'>
        <div className='product__img'>
          <img src={product.image} alt='상품이미지' />
        </div>
        <div className='product__info'>
          <p className='product__info-name'>{product.name}</p>
          <p className='product__info-price'>{product.price}</p>
        </div>
      </section>
    </div>
  )
}
