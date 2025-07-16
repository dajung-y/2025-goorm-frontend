import React from 'react'
import { useClupFormStore } from '../../stores/clupFormStore'

export default function Step4_Preview() {
  const {formData} = useClupFormStore();
  return (
    <section>
      <div>
        <h2 className='text-xl font-bold'>기본 정보</h2>
        <p>이름: {formData.name}</p>
        <p>학년: {formData.grade}</p>
        <p>연락처: {formData.phone}</p>
      </div>
      <div>
        <h2 className='text-xl font-bold'>희망 동아리</h2>
        <p>동아리 선택: {formData.club} </p>
        <p>부가활동: </p>
      </div>

    </section>
  )
}
