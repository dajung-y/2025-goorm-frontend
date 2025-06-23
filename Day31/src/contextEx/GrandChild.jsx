import React, { useContext } from 'react'

export default function GrandChild() {
  // const user = useContext(UserContext);
  // console.log('받아온 값: ',user);
  return (
    <div>GrandChild
      {/* <h4>여기까지 전달받은 user 값: {user}</h4> */}

    </div>
  )
}

// 중간 컴포넌트들은 user값이 필요없고 grandchild 컴포넌트만 값 필요
// 컴포넌트가 많아질수록 관리가 어려워지고 코드도 지저분해짐