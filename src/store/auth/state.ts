type User = {
  email: string | null;
  name: string | null;
  photoUrl: string | null;
  metadata: firebase.auth.UserMetadata;
}

export type AuthState = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  user: null | User;
}

export const state = {
  isAuthorized: false,
  isAuthorizing: false,
  user: null
}
