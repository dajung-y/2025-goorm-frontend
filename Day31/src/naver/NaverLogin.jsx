import React, { useEffect } from 'react'

export default function NaverLogin() {
  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;

  useEffect(() => {
    // 네이버 로그인에 대한 정보 가지고 있는 라이브러리 다운받음
    // 리액트에서 사용할 수 있도록 객체 생성
    console.log(window.naver);

    // 로그인 버튼 생성하고 로그인 기능 초기화하는 코드
    // isPopup -> true: 팝업창, false: 새 창에서 로그인 진행
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: clientId,
      callbackUrl: 'http://localhost:5173/callback',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    });
    naverLogin.init();
    // 로그인 후 사용자 정보 가져오기
    // 토근확인하기 위해 전체 url 가져오기
    console.log(window.location.href);

    // getLoginStatus()
    // 네이버 로그인이 성공하면 사용자 정보 가져오는 함수
    // 비동기 함수
    if(window.location.href.includes('access_token')){
      naverLogin.getLoginStatus((status) => {
        if(status){
          // 로그인 성공시
          console.log(naverLogin);
        } else {
          console.error('로그인 실패');
        }
      });
    }
  },[]);

  return (
    <>
      <div>NaverLogin</div>
      <div id='naverIdLogin'/>
    </>

  )
}

/**
로그인 하기 위해서는 개발자들에게 라이브러리 제공
1. index.html
 */