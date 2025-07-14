import React from 'react'
import { useFormContext } from 'react-hook-form'

const genderOption = [
  {value: 'male', label: '남성'},
  {value: 'femail', label: '여성'},
]

export default function StepGender() {
  const {
  control,
  formState: {errors}
  } = useFormContext();

  return (
    <div>StepGender</div>
  )
}
