import React from 'react'

export default function LoginStatus({isLoginedIn}) {
  return (
    <div>
      {isLoginedIn ? '로그인됨' : '로그아웃됨'}
    </div>
  )
}
