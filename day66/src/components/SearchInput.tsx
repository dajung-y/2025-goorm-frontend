'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || "");

  console.log(searchValue);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if(searchValue.trim()){
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    router.push(`/user?${params.toString()}`);

  },[searchValue, searchParams, router]);

  return (
    <div className='my-4'>
      <div className='relative'>
        <IoIosSearch className='absolute left-1 top-1' />
        <input type='text'
             placeholder='이름 또는 직무로 검색'
             value={searchValue}
             onChange={(e) => setSearchValue(e.target.value)}
             className='pl-6 border border-gray-300 bg-gray-50 rounded' />
      </div>
    </div>
  )
}
