import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

export default function UseWatchTest() {
  const {
    register,
    control
  } = useForm();
  // name필드 실시간 감시
  const name = useWatch({control, name:'name'});
  const [email, agree] = useWatch({
    control,
    name: ['email', 'agree']
  });
  const age = useWatch({control,name:'age'});

  return (
    <div>
      <input {...register('name')} />
      <p>지금 입력한 이름: {name}</p>
      {/* 다중 필드 감시 + 조건부 버튼 활성화 */}
      <div>
        <input {...register('email')}
                placeholder='이메일' />
        <br />
        <label>
          <input type='checkbox'
                  {...register('agree')} />
          이용약관 동의
        </label>
        <button disabled={!email ||!agree}>다음으로</button>
      </div>
      {/* 특정 조건에 따라 컴포넌트 보여주기 */}
      <div>
        <input type='number'
               {...register('age')}
               placeholder='나이를 입력하세요' />
        {age>19 && <p>성인 전용 콘텐츠가 표시됩니다</p>}
      </div>
    </div>
  )
}


/**
 useWatch()를 이용하면 실시간으로 감시하는건 똑같음
 */