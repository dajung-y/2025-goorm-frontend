import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import StepName from './StepName';
import StepAge from './StepAge';
import StepGender from './StepGender';

export default function SurveyForm() {
  const methods = useForm();
  const onSubmit = (data) => {

  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <StepName />
        <StepAge />
        <StepGender />
        <button type='submit'>제출</button>
      </form>
    </FormProvider>
  )
}

/**
 실무에서는 폼 입력 항목이 많거나 단계별로 나뉘는 경우가 많음
 하나의 파일에 넣으면 유지보수, 테스트, 협업 어려움
 useFormContext를 사용해 폼을 분할
 useForm()에서 선언한 상태를 하위 컴포넌트에서도 공요할 수 있도록 함
 */

 /*
  React-Hook-Form에서 여러 컴포넌트간 폼 상태 공유
  FormProvider를 통해 공유된 useForm()의 상태를 하위 컴포넌트들이 어디서든 가져다 쓸 수 있음
  - useFormContext()는 props 없이도 접근 가능
  - 중첩된 컴포넌트 구조에서 유용하게 사용 가능
  */