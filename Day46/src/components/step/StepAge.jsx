import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function StepAge() {
  const {
    register,
  formState: {errors},
  } = useFormContext();

  return (
    <div>StepAge</div>
  )
}
