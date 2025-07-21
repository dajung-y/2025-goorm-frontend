import { create } from "zustand"

export const uesUserStore = create((set) => (
  {
    name: '',
    setName: (newName) => set({name: newName})
  }
));