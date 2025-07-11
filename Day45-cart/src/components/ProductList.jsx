import React from 'react'
import ProductCard from './ProductCard'

import products from '../data/products.json'

export default function ProductList() {
  return (
    <section className='m-4'>
      <div className='flex justify-center gap-4 py-4'>
        { products.items.map((item) => (
          <ProductCard key={item.id} 
                      item={item} />
        ))}
      </div>
    </section>
  )
}
