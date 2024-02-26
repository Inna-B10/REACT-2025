import { create } from "zustand";

export const useUserStore = create((set) => {
  return {
    user: null,
    signin: () => set(() => ({ user: { name: "Lars" } })),
    signout: () => set(() => ({ user: null })),
  };
});
