// To prevent errors in SSR
const storage = typeof window !== 'undefined' ? localStorage : ({} as Storage);
const AUTH_TOKEN_KEY = 'authToken';

export function getAuthToken(): string | null {
  const storageValue = storage.getItem(AUTH_TOKEN_KEY);
  return storageValue;
}

export function setAuthToken(authToken: string | null): void {
  if (authToken) {
    storage.setItem(AUTH_TOKEN_KEY, authToken);
  } else {
    storage.removeItem(AUTH_TOKEN_KEY);
  }
}
