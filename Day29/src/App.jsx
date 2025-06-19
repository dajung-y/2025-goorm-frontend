import MainPage from "./pages/MainPage"

function App() {


  return(
    <>
      <MainPage />
    </>
  )
}

export default App


// 사용자의 정보 미리 가지고 오는 컴포넌트
// const Profile = () => {
//   // useLoaderData()를 통해 라우터의 loader 함수에서 가져온 데이터 사용
//   const user = useLoaderData();
//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>{user.name}</p>
//     </div>
//   )
// };

// // 라우터 만들기
// const router =  createBrowserRouter([
//   {
//     path: '/user/:id',
//     element: <Profile />,
//     loader: async ({params}) => {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//       console.log(res);

//       if(res.ok){
//         return res.json();
//       } else{
//         console.error('데이터 로드 실패');
//       }
//     }
//   }
// ]);

/**
최신 리액트 라우터 철학 - 데이터 중심 라우팅
React Router 6.4 부터 도입된 방식
데이터 라우터 API중 하나로 컴포넌트 형식이 아니라 라우트 객체를 선언해서 컴팩트하게 관리
createBrowserRouter
브라우저의 히스토리를 기반으로 동작하는 라우터 생성
main.jsx 파일에서함
라우팅 할 때 중앙 집중식으로 관리할 수 있어서 유지 보수에 유리
RouterProvider
위에서 createBrowserRouter 생성한 라우터를 리액트에서 사용할 수 있도록 만들어주는 태그

라우터에서 데이터의 로딩/제어를 담당하게 만든 것
loader - 라우팅 시 데이터 미리 불러오기
         라우터가 시작되기 전에 데이터 미리 불러오는 것

action - 라우팅시 폼 전송 핸들링(폼 제출 처리)
defer - 데이터 일부만 천천히
      - 페이지 진입할 때 모든 데이터를 기다리면 첫 화면이 늦게 뜸
        중요한 것 먼저 보여주고 나머지는 느긋하게 가져옴
 */

/**
const Home = () => <h1>Home Page</h1>
const About = () => <h1>About</h1>
const NotFound = () => <h1>404 - Page Not Found</h1>

// 브라우저라우터 생성 - 객체 형식
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*', // path 경로 지정하지 않은 모든 url
    element: <NotFound />
  },
])
 */

  // return <RouterProvider router={router} />;
