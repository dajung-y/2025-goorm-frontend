import React from 'react'
import { Form, redirect } from 'react-router-dom'

// form 태그에서 전송버튼 눌렀을 때 실행할 수 있는 함수 
export async function contactAction({request}){
  // form 입력한 데이터 수집
  const data = await request.formData();
  const name = data.get('username');
  console.log('입력된 이름', name);
  return redirect('/'); // 폼 전송시 어디로 이동할지 설정
}

export default function Contact() {


  return (
    <div>
      <h1>이름 입력</h1>
      <Form method='post'>
        <input type='text' 
               name='username' 
               placeholder='이름을 입력하세요'/>
        <input type='text'
               name='age'
               placeholder='나이를 입력하세요' />
        <button type='submit'>입력</button>
      </Form>


    </div>
  )
}

// 폼태그 이용해서 데이터 전송할 때
// 데이터를 서버로 보낼때 담아주는 변수명처럼 설정 필요