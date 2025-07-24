import React from 'react'
import { useForm } from 'react-hook-form'
import UseWatchTest from './components/useWatch/UseWatchTest'
import WatchTest from './components/useWatch/WatchTest'
import UseWatchTest2 from './components/useWatch/UseWatchTest2'
import SwiperTest1 from './components/swiperTest/SwiperTest1'
import SwiperTest2 from './components/swiperTest/SwiperTest2'
import SwiperTest3 from './components/swiperTest/SwiperTest3'
import SwiperTest4 from './components/swiperTest/SwiperTest4'
import SwiperTest5 from './components/swiperTest/SwiperTest5'

export default function App() {

  return (
    <div>
      {/* <UseWatchTest /> */}
      {/* <WatchTest /> */}
      {/* <UseWatchTest2 /> */}
      {/* <SwiperTest1 /> */}
      {/* <SwiperTest2 /> */}
      {/* <SwiperTest3 /> */}
      {/* <SwiperTest4 /> */}
      <SwiperTest5 />
    </div>
  )
}

/**
 watch()
 - 모든 값이나 특정 필드 값을 실시간으로 감시하는 함수
 - 지금 사용자가 쓰고 있는게 뭔지 바로 알 수 있음
 const name = watch('name');
 name이라는 입력창에 들어간 내용을 계속 지켜보게 됨

 watch()를 사용하지 않으면 폼 제출(handleSubmit)을 하기 전까지
 입력된 값들을 react hook form 에서 내부적으로 기억하지만
 코드로 즉시 확인은 불가능

  const {register, watch} = useForm();
  const name = watch('name');
  const password = watch('password');
  const confirm = watch('confirm');

        <input {...register('name')} />
      <p>지금 입력한 이름: {name}</p>

      <button disabled={!name}>다음으로</button>
      <div>
        <label>비밀번호 입력</label>
        <input type='password'
          {...register('password')} />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input type='password'
          {...register('confirm')} />
      </div>
      { password && confirm
                 && password !== confirm
                 && (
                  <p>비밀번호가 일치하지 않습니다</p>
                 )}
 */