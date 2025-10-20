import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'blackwell-user-storage',
    }
  )
);