import React from 'react'
import HashBasic from './hash/HashBasic'
import HashTable from './hash/HashTable'
import HashPassword from './hash/HashPassword'
import HashPasswordSHA from './hash/HashPasswordSHA'
import Test1 from './test/Test1'
import Test2 from './test/Test2'

export default function App() {
  return (
    <div>
      {/* <HashBasic />
      <HashTable/>
      <HashPassword />
      <HashPasswordSHA /> */}
      <Test1 />
      <Test2 />
    </div>
  )
}
