import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      token: null,
      setAuth: (userData, token) => {
        set({ userData, token });
        localStorage.setItem("token", token);
      },
      clearAuth: () => {
        set({ userData: null, token: null });
        localStorage.removeItem("token");
      },
    }),

    {
      name: "auth-storage", // unique name for the storage (required)
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
