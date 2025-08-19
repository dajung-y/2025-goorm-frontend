'use client'
import React from 'react'

// props 여러개 받을 때 객체 형태로 타입 지정
type ButtonProps = {
  text: string;
  onClick?: () => void;
  color?: "blue" | "red" | "orange" | "green" | "yellow";
}

export default function Button({text, onClick, color = "green"} : ButtonProps) {
  const colorClass = {
    "blue" : 'bg-blue-500',
    "red" : 'bg-red-500',
    "orange" : 'bg-orange-500',
    "green" : 'bg-green-500',
    "yellow": 'bg-yellow-500'
  }
  return (
    <button onClick={onClick}
            className={`${colorClass[color]} rounded text-white w-20`}>
      {text}
    </button>
  )
}
