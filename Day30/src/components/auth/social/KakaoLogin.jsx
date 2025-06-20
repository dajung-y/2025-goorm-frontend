import React, { useEffect } from 'react'
import KakaoIcon from '../../../assets/icons/kakao-icon-file.png'

export default function KakaoLogin() {

  const kakaoKey = import.meta.env.VITE_KAKAO_KEY;

  // Kakao 객체 불러오고 SDK 초기화
  useEffect(() => {

    console.log('카카오 키: ',kakaoKey);
    if(window.Kakao && !window.Kakao.isInitialized()){
      window.Kakao.init(kakaoKey);
      console.log('카카오 SDK 초기화 완료');
    }
  },[]);

  const handleKakaoLogin = () => {
    if(!window.Kakao){
      console.log('카카오 객체 생성되지않음');
      return; // 함수 종료
    }

    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image',
      success: function(authObj){
        console.log('로그인 성공: ', authObj);

        // 정보 요청
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function(response){
            console.log('사용자 정보: ',response);
          },
          fail: function(err) {
            console.error('사용자 정보 요청 실패: ',err);
          }
        })
      },
      fail: function(err){
        console.error('로그인 실패: ',err);
      }
    })

  }

  return (
    <div>
      <button onClick={handleKakaoLogin}
              className='w-8 h-8 cursor-pointer'>
        <img src={KakaoIcon} alt='아이콘'/>
      </button>
      
    </div>
  )
}
