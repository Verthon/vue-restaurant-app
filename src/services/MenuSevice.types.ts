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
