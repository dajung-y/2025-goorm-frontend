import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {},   // 사용자의 전체 입력값 저장할 객체
  currentStep: 0, // 현재 스탭

  // 입력값 저장 함수
  setFormData: (newData) => 
    set((state) => ({
      formData: {...state.formData,...newData}
    })),
  // 다음단계로 이동
  nextStep: () => set((state) => ({
    currentStep: state.currentStep +1
  })),

  // 이전 단계로 이동
  prevStep: () => set((state) => ({
    currentStep: state.currentStep -1
  })),

}));