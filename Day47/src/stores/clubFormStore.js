// 동아리 가입 스토어

import { create } from "zustand";

export const useClubFormStore = create((set) => ({
  formData: {},
  currentStep: 0,
  // 입력 데이터 저장
  setFormData: (newData) =>
    set((state) => ({
      formData: {...state.formData,...newData}
    })),
  // 다음 단계로 이동
  nextStep: () => set((state) => ({
    currentStep: state.currentStep +1
  })),
  // 이전 단계로 이동
  prevStep: () => set((state) => ({
    currentStep: state.currentStep -1
  })),
  firstStep: () => set(() => ({
    currentStep: 0
  })),
}));