import React from 'react'

export default function EnumExample() {

  // 숫자형 enum
  enum Role{
    User,       // 초기 0 저장
    Admin = 10  // 초기 10 저장
  }

  // 문자열 enum
  enum OrderStatus {
    Pending = "pending",
    Paid = "paid",
  }

  return (
    <div>EnumExample</div>
  )
}
