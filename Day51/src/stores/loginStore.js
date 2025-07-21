import { create } from "zustand";

export const useLoginStore = create(() => (
  {
    id: 'hello',
    pw: '1234',
  }
))