import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CounterState {
  count: number;
}

interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (newCount?: CounterState["count"]) => void;
  addFive: () => void;
}

const useCounter = create<CounterState & CounterActions>()(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set(() => ({ count: get().count + 1 })),
      decrement: () => set(() => ({ count: get().count - 1 })),
      reset: () => set({ count: 0 }),
      setCount: (newCount?: CounterState["count"]) =>
        set({ count: newCount ?? 0 }),
      addFive: () => set({ count: get().count + 5 }),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCounter;
