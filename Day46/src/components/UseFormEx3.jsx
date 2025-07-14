import React from 'react'
import { useForm } from 'react-hook-form'

export default function UseFormEx2() {
  const {register,handleSubmit,formState :{errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h3>다양한 input처리</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type='text'
                 {...register('username',{required: '아이디를 입력하세요',
                                          minLength: {value:4, message: '최소 4글자'},
                                          maxLength: {value:12, message: '최대 12글자'},
                                          pattern: {value: /^a-zA-Z0-9]+$/, message: '영문 + 숫자만 가능'}
                                      })}
                  placeholder='아이디 입력'/>
        </div>
        {errors.username && <span>{errors.username.message}</span>}
        {/* 숫자 범위 */}
        <div>
          <input type='number'
                 {...register('age', {
                  required: '나이를 입력하세요',
                  valueAsNumber: true,
                  min : {value:18, message: '18세 이상 가능'}
                 })} />
        </div>
        {/* 커스텀 */}
        <div>
          <input type='password'
                  {...register('password', {
                    required: '비밀번호를 입력하세요',
                    validate: value=> 
                      [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/]
                      .every(pattern => pattern.text(value))
                      || '영대소문자, 숫자, 특수문자 포함'
                  })} />
        </div>
        {/* select */}
        <label>
          좋아하는 색:
          <select {...register('favoriteColor',{required:'색상을 선택하세요'})}>
            <option value="">선택하세요</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        {/* radio */}
        <div>
          <span>성별:</span>
          <label>
            <input type='radio'
                   value='male'
                   {...register('gender',{required:'성별을 선택하세요'})} />
              male
          </label>
        </div>
        {/* checkbox */}
        <div>
          <label>
            <input type='checkbox'
                   {...register('agree',{required: '약관 동의는 필수입니다'})}/>
              이용 약관 동의
          </label>
        </div>
        <button type='submit'>제출</button>
      </form>
    </div>
  )
}


 /*

const {
  register,         // input을 폼에 등록
  handleSubmit,     // 제출 핸들러
  watch,            // 입력값 실시간 감지
  reset,            // 폼 리셋
  setValue,         // 특정 필드 값 설정
  getValues,        // 현재 모든 값 가져오기
  trigger,          // 수동으로 유효성 검사 실행
  setError,         // 에러 수동 설정
  clearErrors,      // 에러 제거
  formState: {
    errors,         // 에러 객체
    isDirty,        // 값이 변경되었는지 여부
    isValid,        // 전체 유효성 통과 여부
    isSubmitting,   // 제출 중 여부
    touchedFields,  // 포커스 후 터치된 필드
    dirtyFields,    // 변경된 필드
  },
  control,          // Controller를 위한 객체 (Controlled input용)
} = useForm();

검증하는 속성들 
required 필수 입력 여부
minLength 최소 길이
maxLength 최대 길이
min    숫자형 필드의 최소값 
max    숫자형 필드의 최대값 
pattern  정규표현식 패턴 매칭 
setValueAs 값을 등록하기 전에 특정 형태로 변환하는 콜백 
  {setValueAs : v => v.trim()}
disabled
...
*/