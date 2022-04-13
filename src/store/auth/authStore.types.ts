import type { ApiRequestStatus } from '@/types/api'
import { UserCredentials } from '@supabase/supabase-js';

type User = UserCredentials;

export type AuthStoreState = {
  status: ApiRequestStatus;
  user: User | null;
}
