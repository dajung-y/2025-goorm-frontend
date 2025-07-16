import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Step1 from './Step1_BasicInfo';
import Step2 from './Step2_ClupSelection';
import Step3 from './Step3_Introduction';
import Step4 from './Step4_Preview';
import { useClupFormStore } from '../../stores/clupFormStore';

const steps = [Step1, Step2, Step3, Step4];

export default function MultiForm() {

  const methods = useForm();
  const {formData, currentStep, setFormData, nextStep, prevStep} = useClupFormStore();
  const CurrentComponent = steps[currentStep];
  const onSubmit = (data) => {
    console.log(JSON.stringify(data,null,2));
    setFormData(data);
    if(currentStep<steps.length-1){
      nextStep();
    } else{
      console.log('제출됨: ', {...formData,...data});
      alert('신청폼이 제출되었습니다');
    }
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}
            className='max-w-md mx-auto p-4 bg-white shadow rounded-2xl'>
        <h1 className='text-2xl text-center font-bold'>동아리 가입 신청 폼</h1>
        <CurrentComponent />
        {/* 버튼 컴포넌트 */}
        <div className='flex justify-between mt-2'>
          {currentStep>0 && (
            <button type='button'
                    onClick={prevStep}
                    className='px-4 py-1 border border-gray-300 bg-gray-50 rounded cursor-pointer'>
              이전
            </button>
          )}
          <button type='submit'
                  className='px-4 py-1 bg-red-400 text-white rounded cursor-pointer'>
            {currentStep ===steps.length-1 ? '제출' : '다음'}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
