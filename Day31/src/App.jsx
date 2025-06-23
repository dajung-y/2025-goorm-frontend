import { AppProvider, useAppContext } from "./contexts/AppProvider";
import DashBoard from "./DashBoard";
import Cart from "./kurly/Cart";
import ProductDetail from "./kurly/ProductDetail";
import { ProductProvider } from "./kurly/ProductProvider";
import NaverLogin from "./naver/NaverLogin";


function App() {

  return(
    // <AppProvider>
    //   <DashBoard />
    // </AppProvider>

    // <>
    // <h1>로그인하기</h1>
    // <NaverLogin />
    // </>

    <ProductProvider>
      <ProductDetail />
      <Cart />
    </ProductProvider>

  )
  
}

export default App

/**
Context
- 컴포넌트가 props로 전달하지 않고도 멀리있는 부모 컴포넌트로부터 정보 받아올 수 있음
- 리액트에서 여러 컴포넌트가 공유해야 하는 데이터를 전역으로 관리할 수 있는 기능

실무에서는 여러 Context를 파일로 분리하고 폴더 구정
context/AuthContext.jsx
       /CartContext.jsx
       /ThemeContext.jsx
       /LangContext.jsx

너무 많은 값을 Context에 넣으면 전체가 재렌더링됨
값 분리 + 최적화(useMemo)
중첩(Redux, Recoil) 대체하기도 함
 */

// const [user, setUser] = useState('성규');


// return (
//   <UserContext.Provider value='성규'>

//     <ContextTest user={user}/>
//     <GrandChild />

//   </UserContext.Provider>