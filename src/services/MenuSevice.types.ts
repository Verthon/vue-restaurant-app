import { definitions } from '@/types/supabase'

export type MenuData = {
  description: string;
  name: string;
  price: number;
}

export type MenuCategory = {
  id: string;
  data: {
    data: MenuData[];
  };
}

export type MenuState = MenuCategory[]

export type Menu = Required<definitions['products']>
