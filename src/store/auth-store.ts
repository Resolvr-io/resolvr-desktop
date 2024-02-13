import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface State {
  pubkey: string | undefined;
  setPubkey: (pubkey: string | undefined) => void;
}

const useAuthStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        pubkey: undefined,
        setPubkey: (pubkey: string | undefined) => set({ pubkey }),
      }),
      {
        name: "pubkey-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useAuthStore;
