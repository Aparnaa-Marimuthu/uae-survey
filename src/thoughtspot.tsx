import { init, AuthType } from "@thoughtspot/visual-embed-sdk";

let isInitialized = false;

export const initThoughtSpot = () => {
  if (isInitialized) return;
  init({
    thoughtSpotHost: import.meta.env.VITE_TS_HOST,
    authType: AuthType.TrustedAuthToken,
    getAuthToken: async () => {
      const username = localStorage.getItem("username");
      const password = sessionStorage.getItem("tempPassword"); // Store temporarily during login

      if (!username || !password) {
        console.warn("Missing credentials");
        return "";
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Login failed");
        }

        const data = await res.json();
        sessionStorage.removeItem("tempPassword"); 
        return data.authToken;
      } catch (err) {
        console.error("Backend auth failed:", err);
        return "";
      }
    }
  });
  isInitialized = true;
};
