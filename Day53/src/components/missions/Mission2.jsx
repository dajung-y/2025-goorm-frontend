import React from 'react'
import '../../scss/Mission2.scss'

export default function Mission2() {
  return (
    <div>
      <h2>카드 반복 생성</h2>
      <div>
        {
          [1,2,3,4].map((n) => (
            <div key={n}
                 className={`card-${n}`}>
              card {n}
            </div>
          ))
        }
      </div>
    </div>
  )
}
