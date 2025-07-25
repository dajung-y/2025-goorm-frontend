import React from 'react'
import styles from '../../scss/Mission1.module.scss'
export default function Mission1() {
  return (
    <div>
      <h2>버튼 크기 변경</h2>
      <button className={styles['btn-sm']}>버튼 1</button>
      <button className={styles['btn-md']}>버튼 2</button>
      <button className={styles['btn-lg']}>버튼 3</button>
    </div>
  )
}
