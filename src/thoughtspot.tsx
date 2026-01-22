import { init, AuthType } from "@thoughtspot/visual-embed-sdk";

let isInitialized = false;

export const initThoughtSpot = () => {
    if (isInitialized) return;
  init({
    thoughtSpotHost: import.meta.env.VITE_TS_HOST,
    authType: AuthType.None,
  });
   isInitialized = true;
};
