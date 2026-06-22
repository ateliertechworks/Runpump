const isNode = typeof window === 'undefined';

const getAppParams = () => ({
  appId: import.meta.env.VITE_APP_ID ?? null,
  token: null,
  fromUrl: isNode ? null : window.location.href,
  functionsVersion: import.meta.env.VITE_FUNCTIONS_VERSION ?? null,
  appBaseUrl: import.meta.env.VITE_APP_BASE_URL ?? null,
});

export const appParams = getAppParams();
