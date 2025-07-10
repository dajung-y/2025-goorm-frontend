import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  users: [
    {
      id: 'hello',
      pw: '1234',
    },
  ],
  join: (id, pw) =>
    set((state) => ({
      users: [...state.users, { id, pw }],
    })),
  login: (id, pw) => {
    const { users } = get();
    const foundUser = users.find((user) => user.id === id && user.pw === pw);
    if (foundUser) {
      set({ isLoggedIn: true });
      return true;
    } else {
      return false;
    }
  },
}));
