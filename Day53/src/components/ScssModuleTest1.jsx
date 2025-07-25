import React, { useState } from 'react'
import styles from '../scss/ScssModuleTest1.module.scss'
export default function ScssModuleTest1() {
  const [isActive, setIsActive] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  const [selectedTab, setSelectedTab] = useState('홈');
  const activeToggle = () => {
    setIsActive((prev) => !prev );
  }
  const modeToggle = () => {
    setDarkmode((prev) =>!prev);
  }
  return (
    <div>
      <h3>active예제</h3>
      <button onClick={() => activeToggle()}>활성</button>
      <div className={`${styles.box} ${isActive ? styles.active : ''}`}>
        {
          isActive ? '활성 상태' : '비활성 상태'
        }
      </div>

      <h3>다크모드 선택 예제</h3>
      <button onClick={()=>modeToggle()}>모드 변경</button>
      <div className={`${styles.card} ${darkmode ? styles.dark : ''}`}>
      </div>

      <h3>선택된 항목 selected 예제</h3>
      <div>
        <button className={`${styles.tab} ${selectedTab ? styles.selected : ''}`} >{selectedTab}</button>
      </div>
    </div>
  )
}
