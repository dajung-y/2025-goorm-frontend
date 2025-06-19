import React, { useEffect } from 'react'

export default function KakaoLogin() {

  const kakaoLoginKey= import.meta.env.VITE_KAKAO_KEY;

  // 카카오객체를 한 번 실행해서 앱 key 확인하는 명령문 필요
  // window.Kakao 브라우저에서 로드 된 카카오 전역객체
  // 카카오에서 제공하는 객체에 내 앱 key를 저장해서 객체 초기화
  // 앱 시작시 딱 한번만 초기화 진행
  // 여러번 초기화되는 버그 방지하기 위해 사용하는 함수
  // init(앱key)
  useEffect(()=>{
    if(!window.Kakao.isInitialized())
    window.Kakao.init(kakaoLoginKey)
    console.log('정상적으로 객체 생성완료', window.Kakao);
  },[kakaoLoginKey])

  // 인증
  const handleLogin = () => {
    Kakao.Auth.authorize({
      redirectUri:'http://localhost:5173/callback',
    });

  }
  return (
    <div>
      <h1>Kakao Login</h1>
      <button onClick={handleLogin}>카카오 로그인</button>

    </div>
  )
}

/**
카카오 로그인을 하기 위해서는 js key 필요
OAuth
- 카카오, 구글, 네이버 등의 계정을 이용해서 내 서비스에 로그인하거나 인증정보를 받아오는 표준 프로토콜

카카오 로그인 함수들 다운받는 스크립트 
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>



 */