'use client'
import ProductCard from '@/components/ProductCard'
import { AnyItem } from '@/types/product'
import React, { useEffect, useState } from 'react'

interface CatalogResponse {
  success: boolean
  data: AnyItem[]
}

export default function page() {
  // 데이터 받을 state
  const [allItems, setAllItems] = useState<AnyItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchAllData = async() => {

      setLoading(true);
      setError(null);

      try{
        const res = await fetch('/api/catalog');
        console.log("res : ",res);
        const result : CatalogResponse = await res.json();
        console.log(result);

        if(result.success){
          setAllItems(result.data);
        }
      } catch(err){
        console.error(err);
        setError(error);
      } finally{
        setLoading(false);
      }
    }
    fetchAllData();
  },[])
  
  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 gap-4'>
        {
          allItems.map((item) => (
            <ProductCard key={item.id}
                        item={item} />
          ))
        }
      </div>
    </div>
  )
}
