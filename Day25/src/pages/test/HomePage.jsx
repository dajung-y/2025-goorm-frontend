import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/test.css'

export default function HomePage() {


  return (
    <div>
      <h1>홈페이지</h1>
      <Link to='/productlist'>상품 리스트로 이동</Link>
    </div>
  )
}
