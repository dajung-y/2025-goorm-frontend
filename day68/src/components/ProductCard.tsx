import { AnyItem, Book, Device } from '@/types/product'
import React from 'react'

interface ProductCardProps {
  item: AnyItem
}

function isbook (item: AnyItem) : item is Book {
  return ("author" in item && "pages" in item)
}

function isDevice (item: AnyItem) : item is Device {
  return("brand" in item && "warrantyMonths" in item)
}

export default function ProductCard({item} : ProductCardProps) {
  return (
    <div className='bg-white p-4 shadow rounded-2xl'>
      <h3 className='text-xl font-bold'>
        { isbook(item) && (
          <span>📘{item.name}</span>
        )}
        { isDevice(item) && (
          <span>📱{item.name}</span>
        )}
        { !isbook(item) && !isDevice(item) && (
          <span>{item.name}</span>
        )}
      </h3>
      <p className='text-gray-500'>{item.price.toLocaleString()}원</p>
      {isbook(item) && (
        <div>
          <p>{item.author}</p>
          <p>{item.pages}p</p>
        </div>
      )}
      {isDevice(item) && (
        <div>
          <p>{item.brand}</p>  
          <p>{item.warrantyMonths}개월</p>
        </div>
      )}
      {!isbook(item) && !isDevice(item) && (
        <div>
          <span className='bg-green-700 rounded text-white px-2'>일반상품</span>
        </div>
      )}
    </div>
  )
}
