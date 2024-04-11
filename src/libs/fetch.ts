

import { useAuthStore } from "../store/auth";

const baseURL = import.meta.env.VITE_URL_BASE || "http://localhost:3000";
 /*  process.env.NODE_ENV === "production"
    ? process.env.DOMAIN
    : "http://localhost:3000"; */

function fetchWithAuth(input: String, init?: RequestInit): Promise<Response> {
  const token = useAuthStore.getState().token;
  if (!init) {
    init = {};
  }
  if (!init.headers) {
    init.headers = {};
  }
  init.headers = {
    ...init.headers,
    Authorization: `Bearer ${token}`
  };
  return fetch(baseURL+input, init);
}

export default fetchWithAuth;