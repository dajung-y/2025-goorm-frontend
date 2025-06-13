import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Post from './pages/Post'
import PostDetail from './pages/PostDetail'
import HomePage from './pages/test/HomePage'
import ProductListPage from './pages/test/ProductListPage'
import ProductDetailPage from './pages/test/ProductDetailPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productlist' element={<ProductListPage />} />
        <Route path='/productdetail/:id' element={<ProductDetailPage />} />
      </Routes>
    </>
  )
}

export default App

/**
 React Router
 - react에서 URL경로에 따라 화면을 바꿔주는 라이브러리
 - SPA이기 때문에 페이지를 새로고침 하지않고 URL만 바꿔서 다양한 컴포넌트 보여줌
 - Router : 페이지 하나하나를 설정
 - Link : 다른 페이지로 이동할 수 있게 도와줌
 - BrowserRouter 로 전체 앱 감싸야 사용 가능
 - url 경로 설정
   <Route> 태그 이용해서 url 경로 설정하고 element 속성 이용해서 어떤 컴포넌트 보이게 햘지 정함

   Routes : 네비게이션
   Route : 길
   Link : 안내 표시판

   Link 태그는 페이지 이동을 위한 리액트 전용 버튼. 새로고침없이 이동
 */

//    <nav>
//    {/* 리액트의 Link 태그는 HTML의 a 태그
//        리액트의 to는 href로 변경
//     */}
//    <Link className='link' to='/'>Home</Link>
//    <Link className='link' to='/about'>About</Link>
//    <Link className='link' to='/post'>Post</Link>
//  </nav>

//  <Routes>
//    <Route path='/' element={<Home />} />
//    <Route path='/about' element={<About />} />
//    <Route path='/post' element={<Post />} />
//    <Route path='/post/:id' element={<PostDetail />} />
//  </Routes>