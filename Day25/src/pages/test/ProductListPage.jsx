import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductListPage() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json')
    .then(res => res.json())
    .then(data => {setProduct(data)
                    console.log(data)
    })
  },[]);

  return (
    <div>
      <h1>제품 리스트 페이지</h1>
      <span>
        <Link to='/'>홈으로 이동</Link>
      </span>
      {
        products.map((product, index) => (
          <div key={index} className='product__card'>
            <Link to={`/productdetail/${index+1}`}>
              <img src={product.image} alt='상품이미지' />
            </Link>
            <p>{product.name}</p>
          </div>
        ))
      }
    </div>
  )
}
