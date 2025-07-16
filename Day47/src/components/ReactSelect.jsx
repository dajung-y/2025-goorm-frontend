import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Select from 'react-select';

export default function ReactSelect() {
  const options = [
    {value: '초콜릿', label: '초콜릿'},
    {value: '딸기초콜릿', label: '딸기초콜릿'},
    {value: '화이트초콜릿', label: '화이트초콜릿'},
  ]

  const [selectOption, setSelectOption] = useState(null);
  const {register,handleSubmit} = useForm();
  
  const handleChange = (option) => {
    console.log('선택된 값', option);
    setSelectOption(option);
  }
  const onSubmit = (data) => {
    console.log('options: ',JSON.stringify(data));
    console.log(`제출된 form data: ${data}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          {...register('flavor')}
          options={options}         // 드롭다운 옵션
          value={selectOption}      // 현재 선택된 값
          placeholder='맛을 선택하세요'
          onChange={handleChange}   // 선택시 변경되는 함수(이벤트)
          isClearable
        />
        <button type='submit'>선택</button>
      </form>
    </div>
  )
}

/**
 react-hook-form
 select 태그는 html폼과 연결해서 useForm()관리
 외부 라이브러리로 받아온 UI들은 register가 연결 못함
 register()는 브라우저 기본 <input><select> 에서는 잘 동작
 외부 라이브러리들은 Controller 이용해서 연결
 - 직접 ref, value 제어 못함
 */
