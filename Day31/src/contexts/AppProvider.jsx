import React, { createContext, useContext, useState } from 'react'

// 전체 공유할 객체 생성
const AppContext = createContext();

function AppProvider({children}) {
  const [user,setUser] = useState('이름');
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('ko');

  // 공유할 값 구성
  const value={
    user, setUser,
    theme, setTheme,
    lang, setLang,
  }

  // 공유 값 전달할 Provider
  return (
    <AppContext.Provider value={value}>
      {/* 자식 컴포넌트들이 context값에 접근할 수 있도록 작성 */}
      {children} 
    </AppContext.Provider>
    
  )
}

function useAppContext(){
  return useContext(AppContext);
}

// 두 개를 같이 내보낼 때 가장 안전한 방식
export {AppProvider, useAppContext};
