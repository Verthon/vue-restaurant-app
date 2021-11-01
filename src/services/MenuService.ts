import { supabase } from '@/lib/supabase'
import { definitions } from '@/types/supabase'

export default {
  async fetchMenu () {
    const { data, error } = await supabase.from<definitions['products']>('products').select('*')
    if (error) {
      throw new Error(`${error.message}: ${error.details}`)
    }

    return data
  }
}
