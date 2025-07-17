import React, { useEffect, useState } from 'react'

export default function WindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },size);

  return (
    <div>
      <h3>창 크기 변경</h3>
      <p>현재 window 사이즈: {size}px</p>
    </div>
  )
}
