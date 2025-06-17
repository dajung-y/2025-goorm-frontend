import axios from 'axios';
import React, { useEffect } from 'react'

export default function NaverCrawling() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/naver')
         .then((res) => {console.log(res)})
         .catch((err) => {console.error(err)});
  },[]);
  return (
    <div>
      NaverCrawling
    </div>
  )
}
