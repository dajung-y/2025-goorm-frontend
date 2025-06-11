import React from 'react'

export default function EventBubbling3() {

  const handleClick = (e) => {
    e.preventDefault();
    alert('링크 이동 막기');
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 자동 제출 방지
    alert('폼 제출전 유효성 검사');
  }

  const inputN = '123345';
  // 패턴은 문자열 안에 작성하는 것이 아니라 //안에 작성
  const onlyNumber = /^[0-9]+$/;
  const onlyKorean = /^[가-힣]+$/;



  console.log(onlyNumber.test(inputN));

  return (
    <div>
      <h1>기본 동작막기</h1>
      <a href = 'https://www.naver.com/' 
         onClick = {handleClick}>네이버</a>

      <form onSubmit={handleSubmit}>
        <input type='text' />
        <input type='submit' value='제출' />
      </form>
    </div>
  )
}

/**
 * preventDefault()
 * 브라우저의 기본 동작을 막는 함수
 * <a> <form> 태그 등 자동으로 제출이나 링크이동, 마우스 휠 동작 ... 막음
 */


// Uncaught Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.
// input 태그는 void element(빈 요소)이기 때문에 </input> 닫는 태그를 쓰면 안됨
// 내용 넣고 싶으면 value 속성 사용

/**
 * 정규식
 * - 문자열 안에서 특정한 패턴을 찾는 도구
 *  /정규식패턴/.test('문자열') 또는 match() 검사함
 * 
 * React Hook Form
 * - 폼 상태 관리, 유효성 검사, 제출처리를 깔끔하게 도와주는 라이브러리
 * - 사용하려면 다운로드 (npm install react-hook-form)
 * - 상태관리, 리렌더링을 최소화해서 성능 향상
 * - 중대형 프로젝트에서 기본적으로 사용
 *  (Formik, Yup)
 * 
 */