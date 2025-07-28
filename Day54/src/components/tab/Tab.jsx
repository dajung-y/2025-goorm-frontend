import React, { useState } from 'react'
import styles from './Tab.module.scss';
import clsx from 'clsx';

export default function Tab() {
  const tabs = ['Home', 'Profile', 'Settings'];
  const [activedTab, setActivedTab] = useState(tabs[0]);
  return (
    <nav className={styles.tabMenu}>
      {tabs.map(tab => (
        <button key={tab}
                className={clsx(
                  styles.tabItem,
                  {[styles.tabActive]: activedTab === tab}
                )}
                onClick={()=>setActivedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
