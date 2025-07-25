import React from 'react'
import styles from '../scss/ScssModuleTest2.module.scss'
export default function ScssModuleTest2() {
  return (
    <div>
      <h3>버튼 상속 예제</h3>
      <button className={styles['btn-primary']}>Primary 버튼</button>
    </div>
  )
}
