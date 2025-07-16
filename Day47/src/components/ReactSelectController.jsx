import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';

export default function ReactSelectController() {
  const options = [
    {value: '초콜릿', label: '초콜릿'},
    {value: '딸기초콜릿', label: '딸기초콜릿'},
    {value: '화이트초콜릿', label: '화이트초콜릿'},
  ]

  // useForm에서 control 객체 가져오기
  const {handleSubmit, control} = useForm();
  const onSubmit = (data) => {
    console.log('제출된 data: ', JSON.stringify(data,null,2));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller         // 데이터를 사용하는 UI 컴포넌트
          name='flavor'
          control={control} // 외부 컴포넌트와 연결해주는 연결자 역할 (데이터)
          render={({field}) => (   // 필드 어떻게 그릴지 정하는 함수
                                 // ...field(핵심동작)
                                 // value -> 현재 값
                                 // onChange -> 선택된 값이 바뀔 때 저장
                                 // ref -> 폼 내부에서 요소 추적  
            <Select
              {...field}
              options={options}         // 드롭다운 옵션
              placeholder='맛을 선택하세요'
              isClearable
            />)
          }
        />
        <button type='submit'>선택</button>
      </form>
    </div>
  )
}

/**
 control 폼 상태를 추적하는 기계(외부 컴포넌트 연결 준비)
 Controller 외부 UI를 붙여주는 연결자 (어떤 UI 보여줄지 설정)
 Select {...field} 연결을 사용하는 사용자 인터페이스
 ...field -> value,onChange,ref 등을 한꺼번에 전달

 실행순서
 사용자가 드롭다운 선택 -> 상태 변경(onChange)
 제출 버튼 클릭 -> handleSubmit 호출
 통과하면 onSubmit 함수 실행
 폼 데이터 출력 or 저장
 */