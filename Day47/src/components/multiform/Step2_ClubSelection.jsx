import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Select from 'react-select';

const clubOptions = [
  {label:'축구 동아리', value:'football'},
  {label:'독서 동아리', value: 'book'},
  {label:'제빵 동아리', value: 'backing'},
]

const extraOptions = [
  {label:'자원봉사', value:'volunteer'},
  {label: '스터디', value: 'study'},
  {label: '운동', value:'exercise'}
]
export default function Step2_ClubSelection() {
  const {control, register} = useFormContext();
  return (
    <section>
      <h2 className='mb-2 text-xl font-bold'>희망 동아리</h2>
      <div className='mb-2'>
        <label className='block'>동아리 선택</label>
        <Controller
          name='club'
          control={control}
          render={({field}) => (
            <Select 
              {...field}
              options={clubOptions}
              isClearable
            />
          )}
        />
      </div>
      {/* 체크박스 */}
      <div>
        <label className='blocl'>부가활동</label>
        {extraOptions.map((option) => (
          <div className='flex flex-col space-y-2'>
            <label key={option.label}
                  className='block'>
              <input type='checkbox'
                     value={option.value} 
                     {...register('extra', {required:true})}
                     className='mr-2'/>
            {option.label}
            </label>
          </div>
        ))}
      </div>
    </section>
  )
}
