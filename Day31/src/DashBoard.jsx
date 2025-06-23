import React, { useContext } from 'react'
import { AppProvider, useAppContext } from './contexts/AppProvider';

export default function DashBoard() {

  const {user, theme, lang} =useAppContext();

  return (
    <div>DashBoard

      <h1>context 값 꺼내기</h1>
      <p>user: {user}</p>
      <p>theme: {theme}</p>
      <p>lang: {lang}</p>

    </div>
  )
}
