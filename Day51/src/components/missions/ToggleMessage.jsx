import React, { useState } from 'react'

export default function ToggleMessage() {
  const [message, setMessage] = useState('');
  const handleToggle = () => {
    setMessage('안녕하세요');
    if(message!==''){
      setMessage('');
    }
  }
  return (
    <div>
      <button onClick={handleToggle}>
        클릭
      </button>
      <p>{message}</p>
    </div>
  )
}
