import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InterviewInfo from './InterviewInfo';
import InterviewTeam from './InterviewTeam';
import InterviewCareer from './InterviewCareer';
import InterviewIntro from './InterviewIntro';

export default function InterviewForm() {

  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const onSubmit = (data) => {
    if(currentStep<totalSteps){
      setCurrentStep(currentStep+1);
    } else {
      console.log(data);
    }
  }

  return (
    <div className='flex flex-col border rounded-2xl p-4 w-sm'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {currentStep ==1 && <InterviewInfo />}
          {currentStep ==2 && <InterviewTeam />}
          {currentStep ==3 && <InterviewCareer />}
          {currentStep==4 && <InterviewIntro />}
          <div className='flex justify-end p-4'>
            <button type='submit'
                    className='px-8 py-2 bg-red-400 text-white rounded cursor-pointer'>
              {currentStep<4 ? '다음' : '제출'}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
