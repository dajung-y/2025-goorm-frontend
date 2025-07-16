import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const deptOptions = [
  { label: "개발", value: "dev" },
  { label: "디자인", value: "design" },
  { label: "기획", value: "plan" },
];

export default function Step2_Detartment() {
  const {control} = useFormContext();
  return (
    <div>
      <h2 className='text-xl font-bold'>희망 부서</h2>
      <div className='flex flex-col space-y-1'>
        <label>부서</label>
        <Controller
          name='department'
          control={control}
          render={({field}) => (
            <Select
              {...field}
              options={deptOptions}
              placeholder='부서 선택'
              isClearable
            />
          )}
        />
      </div>

    </div>
  )
}
