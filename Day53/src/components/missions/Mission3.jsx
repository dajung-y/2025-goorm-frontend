import React from 'react'
import styles from '../../scss/Mission3.module.scss'

export default function Mission3() {
  return (
    <div>
      <h3>텍스트에 스타일 적용</h3>
      <h1 className={styles['heading-h1']}>h1 태그</h1>
      <h2 className={styles['heading-h2']}>h2 태그</h2>
      <h3 className={styles['heading-h3']}>h3 태그</h3>
    </div>
  )
}
