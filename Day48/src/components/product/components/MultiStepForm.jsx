import React, { useRef } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { FormProvider, useForm } from 'react-hook-form';

const steps = [Step1, Step2, Step3];

export default function MultiStepForm() {
  const meothods = useForm();
  const swiperRef = useRef();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <FormProvider {...meothods}>
      <form onSubmit={meothods.handleSubmit(onSubmit)}>

        <button type='submit'>
          다음
        </button>
      </form>
      
    </FormProvider>
  )
}
