import { create } from "zustand";

export const useCounterStore = create((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  };
});
