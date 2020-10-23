import actions from './actions'
import mutations from './mutations'

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

const state: AuthState = {
  isAuthorized: false,
  isAuthorizing: false,
  user: null
}

export default {
  state,
  actions,
  mutations
}
