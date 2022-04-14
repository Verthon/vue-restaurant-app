
import { supabase } from '@/lib/supabase'
import { Credentials } from './AuthService.types'

export default {
  doLogin (email: Credentials['email'], password: Credentials['password']) {
    return supabase.auth.signIn({ email, password })
  },
  doLogout () {
    return supabase.auth.signOut()
  }
}
