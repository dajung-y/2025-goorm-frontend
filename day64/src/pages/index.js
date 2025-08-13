import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default function Home({token}) {

  return (
   <div className="flex flex-col space-y-2 items-center">
    <h1 className="text-2xl font-bold">쿠키(Cookie)</h1>
    <p>저장된 쿠키 토큰: {token || "없음"}</p>
    {/* 버튼 클릭 -> /api/login 호출 -> 쿠키 저장 -> 새로고침시 SSR에서 읽어오기 */}
    <div className="flex space-x-2">
      <button onClick={() => fetch("/api/login")}
              className="px-2 bg-green-500 text-white rounded cursor-pointer">
        쿠키 저장
      </button>
      <button onClick={() => fetch("/api/logout")}
              className="px-2 bg-red-500 text-white rounded cursor-pointer">
        쿠키 삭제
      </button>
    </div>

   </div>
  );
}

// 페이지가 브라우저에서 열리기 전에 서버에서 먼저 실행하여 쿠키나 DB데이터를 가져오는 props로 페이지 컴포넌트에 전달
// getServerSideProps()
// - 초기상태 전달
// - 서버에서 데이터를 이미 받아 HTML을 완성해서 보냄 -> 초기 속도 좋음
export async function getServerSideProps({req, res}){
  // req 안의 쿠키중 "adminToken" 값 꺼내옴. 없으면 null 넘김
  const token = await getCookie("adminToken",{req,res}) || null;
  console.log('쿠키에서 가져온 토큰: ',token);
  return {props: {token}}
}

/**
 쿠키
 - 브라우저와 서버가 데이터를 주고받을 때 브라우저에 저장되는 작은 텍스트 덷이터
 - 보통 로그인 세션 유지, 인증정보 저장, 사용자 설명

 특징
 - 브라우저에 저장
   (사용자가 페이지 이동하거나 새로고침해도 유지 가능)
 - 자동 전송
   (해당 도메인에 요청을 보낼 때 마다 브라우저가 자동으로 함께 전송)
 - 유효기간(expires / max-age) 설정가능
 - 클라이언트(js)와 서버(node) 양쪽에서 읽고 쓸 수 있음

 실무에서도 많이 사용하는 라이브러리
 npm install cookies-next

 브라우저 환경에서 httpOnly 옵션은 사용 불가능
 -> 민감한 토큰은 서버에서 설정

 SSR 반드시 req,res로 데이터 전달해야 페이지 렌더시 쿠키 접근 가능
 
 인증토큰 저장시 secure: true, Http 환경 권장


   const name = "쿠키이름";
  const value = "저장할 값 (문자열 또는 json)";
  const option = {
    object: "선택",       // 쿠키 설정 값
    maxAge: 60 * 5,       // 유효기간을 초단위로 설정
    path: "/"             // 기본 /
    // secure:
    // httpOnly:
  }
  // 저장
  setCookie(name,value,option)

  // 읽기
  // 리턴하는 값은 문자열 또는 undefined
  getCookie("가져올 쿠키의 이름");
  getCookie("가져올 쿠키의 이름", option);

  // 삭제
  deleteCookie("삭제할 쿠키의 이름");

  실행 순서
  1. 페이지 최초 요청시
     브라우저 http://localhost:3000/ 페이지 요청을 하면 Next 서버가 getServerSideProps() 실행
     getServerSideProps({req,res}) -> 현재 쿠키들 중에 쿠키를 가져올 수 있는 getCookies() 값 찾아서 props 키를 이용해서 쿠키값 return
     Next가 해당 props를 Home 컴포넌트로 전달하여 HTML 완성을 해서 브라우저로 전송
     -> 페이지가 로드 시점부터 쿠키 값이 화면에 반영됨
  2. 브라우저에서 쿠키 저장 버튼 클릭
     버튼 클릭시 fetch 실행 -> 서버로 들어감
     setCookie()실행 -> 응답 헤더에 Set_Cookie 포함
     브라우저가 응답을 받으면서 해당 쿠키를 저장
     HttpOnly가 아니면 JS에서 읽을 수 있고, 아니면 브라우저 저장만 가능

 */

// Module parse failed: Duplicate export 'default'
// 한 js 파일에서 export default 중복 불가