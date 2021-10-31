import { supabase } from '@/lib/supabase'
import { definitions } from '@/types/supabase'

export default {
  fetchMenu () {
    return supabase.from<definitions['products']>('products').select('*')
  }
}
