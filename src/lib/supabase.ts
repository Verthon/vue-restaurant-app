/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL!
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
