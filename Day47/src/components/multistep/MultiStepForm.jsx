import React from 'react'
import Step1 from './Step1_BasicInfo';
import Step2 from './Step2_Detartment';
import Step3 from './Step3_Experience';
import Step4 from './Step4_Introduce';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '../../stores/formStore';

const steps = [Step1, Step2, Step3, Step4];


export default function MultiStepForm() {
  const methods = useForm();
  const {currentStep, nextStep, prevStep, formData,setFormData} = useFormStore();
  const CurrentComponent = steps[currentStep];

  const onSubmit = (data) => {
    console.log('버튼 눌림:',JSON.stringify(data,null,2));
    // 7-1. 현재 단계에서 입력한 데이터를 저장
    setFormData(data);

    // 7-2. 다음을 누르면 다음 컴포넌트로 이동 
    // step1->step2 근데 마지막 단계일 수도 있다.그럼 제출을 눌러야된다.

    if(currentStep < steps.length -1){
      nextStep();  // 다음으로 이동해라!
    }else{
      // 마지막 단계이면 제출을 누른다.
      console.log('최종 제출값:' , {...formData,...data});
      alert('제출 완료!');
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}
            className="p-6 max-w-md mx-auto bg-white shadow space-y-4">

        {/* 6. 현재 단계의 컴포넌트 렌더링  */}
        <CurrentComponent />

        {/* 이전,다음,제출 컴포넌트 버튼  */}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" 
                    onClick={prevStep} 
                    className="px-4 py-2 bg-gray-300 rounded">
              이전
            </button>
          )}
          <button type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white rounded">
            {currentStep === steps.length - 1 ? "제출" : "다음"}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
