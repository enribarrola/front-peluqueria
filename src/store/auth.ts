import {create} from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  profile: any;
  isAuth: boolean;
  roles: string[];
};

type Actions = {
  setToken: (token: string, roles: []) => void;
  setProfile: (profile: any) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
	  roles: [],
      setToken: (token: string, roles:[]) =>
        set((state) => ({
          token,
          isAuth: !!token,
		  roles: roles
        })),
      setProfile: (profile: any) => set((state) => ({ profile })),
      logout: () =>
        set((state) => ({ token: "", profile: null, isAuth: false, roles: []})),
    }),
    {
      name: "auth",
    }
  )
);
