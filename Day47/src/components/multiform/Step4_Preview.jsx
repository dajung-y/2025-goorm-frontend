import React from 'react'
import { useClubFormStore } from '../../stores/clubFormStore'

export default function Step4_Preview() {
  const {formData} = useClubFormStore();
  return (
    <section className='flex flex-col space-y-2'>
      <div>
        <h2 className='text-xl font-bold'>기본 정보</h2>
        <p>이름: {formData.name}</p>
        <p>학년: {formData.grade}</p>
        <p>연락처: {formData.phone}</p>
      </div>
      <div>
        <h2 className='text-xl font-bold'>희망 동아리</h2>
        <p>동아리 선택: {formData.club.label} </p>
        <p>부가활동: {formData.extra.map((e) => (
          <span>{e} </span>
        ))}</p>
      </div>
      <div>
        <h2 className='text-xl font-bold'>자기소개</h2>
        <p>{formData.introduction}</p>
      </div>
    </section>
  )
}
